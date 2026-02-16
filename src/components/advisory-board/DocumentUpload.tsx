"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export interface UploadedDocument {
  file: File;
  preview: string;
  type: "image" | "pdf" | "document";
}

interface DocumentUploadProps {
  onDocumentUploaded: (doc: UploadedDocument) => void;
  uploadedDocument: UploadedDocument | null;
  onRemoveDocument: () => void;
}

function getDocumentType(file: File): "image" | "pdf" | "document" {
  if (file.type.startsWith("image/")) return "image";
  if (file.type === "application/pdf") return "pdf";
  return "document";
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function DocumentUpload({
  onDocumentUploaded,
  uploadedDocument,
  onRemoveDocument,
}: DocumentUploadProps) {
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: unknown[]) => {
      setError(null);

      if (rejectedFiles.length > 0) {
        setError(
          "Invalid file. Please upload an image, PDF, or document (max 25MB)."
        );
        return;
      }

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const docType = getDocumentType(file);
        let preview = "";

        if (docType === "image") {
          preview = URL.createObjectURL(file);
        }

        onDocumentUploaded({ file, preview, type: docType });
      }
    },
    [onDocumentUploaded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "text/plain": [".txt"],
    },
    maxSize: 25 * 1024 * 1024,
    multiple: false,
  });

  if (uploadedDocument) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          {/* File preview / icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
            {uploadedDocument.type === "image" && uploadedDocument.preview ? (
              <img
                src={uploadedDocument.preview}
                alt="Uploaded schematic"
                className="h-full w-full object-cover"
              />
            ) : uploadedDocument.type === "pdf" ? (
              <svg
                className="h-8 w-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-gray-900">
              {uploadedDocument.file.name}
            </p>
            <p className="mt-0.5 text-xs text-gray-500">
              {formatFileSize(uploadedDocument.file.size)} &middot;{" "}
              {uploadedDocument.type === "image"
                ? "Image"
                : uploadedDocument.type === "pdf"
                  ? "PDF Document"
                  : "Document"}
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-accent-600">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Ready for review
            </div>
          </div>

          <button
            onClick={onRemoveDocument}
            className="shrink-0 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            title="Remove document"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        {...getRootProps()}
        className={`group cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition-all ${
          isDragActive
            ? "border-primary-400 bg-primary-50"
            : "border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/30"
        }`}
      >
        <input {...getInputProps()} />
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-100">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>
        {isDragActive ? (
          <p className="text-base font-medium text-primary-600">
            Drop your file here...
          </p>
        ) : (
          <>
            <p className="text-base font-medium text-gray-900">
              Upload a schematic or document
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Drag & drop or{" "}
              <span className="font-medium text-primary-600">browse</span> to
              upload
            </p>
          </>
        )}
        <p className="mt-3 text-xs text-gray-400">
          PNG, JPG, PDF, DOC, DOCX or TXT &middot; Max 25MB
        </p>
      </div>

      {error && (
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">
          <svg
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}
