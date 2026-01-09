"use client";

import { useState } from "react";

interface WorkflowProps {
  title: string;
  code: string;
}

export default function Workflow({ title, code }: WorkflowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
      <h4 className="font-semibold text-gray-800 mb-3">{title}</h4>
      <div className="relative">
        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto text-xs sm:text-sm">
          <code>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium transition-all ${
            copied
              ? "bg-green-500 text-white"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
