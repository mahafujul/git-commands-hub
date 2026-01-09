"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CommandItemProps {
  code: string;
  description: string;
}

export default function CommandItem({ code, description }: CommandItemProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
      <code className="bg-gray-800 text-gray-100 px-3 py-2 rounded-md font-mono text-xs sm:text-sm flex-shrink-0 w-full sm:w-auto break-all sm:break-normal">
        {code}
      </code>
      <span className="text-gray-600 text-sm flex-1">{description}</span>
      <button
        onClick={handleCopy}
        className={`flex items-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-all flex-shrink-0 ${
          copied
            ? "bg-green-500 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {copied ? (
          <>
            <Check size={14} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={14} />
            Copy
          </>
        )}
      </button>
    </div>
  );
}
