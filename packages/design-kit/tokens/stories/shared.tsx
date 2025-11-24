/**
 * Shared components and types for design token stories
 */

import React, { useState } from "react";
import { designTokens as tokens } from "../design.tokens";

export { tokens };

// Typography args interface
export interface TypographyArgs {
  sampleText: string;
  fontSize: keyof typeof tokens.typography.fontSize;
  fontWeight: keyof typeof tokens.typography.fontWeight;
  fontFamily: keyof typeof tokens.typography.fontFamily;
}

// Fonts args interface
export interface FontsArgs {
  sampleText: string;
  selectedFont: keyof typeof tokens.typography.fontFamily;
  fontSize: keyof typeof tokens.typography.fontSize;
  fontWeight: keyof typeof tokens.typography.fontWeight;
}

// CopyButton Component
export const CopyButton: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`cursor-pointer inline-flex items-center gap-1 px-2 py-1 text-xs font-mono bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded transition-colors ${className}`}
      title="Click to copy"
    >
      {copied ? (
        <>
          <span className="text-green-600">✓</span>
          <span>Copied!</span>
        </>
      ) : (
        <>
          <span>📋</span>
          <span>{text}</span>
        </>
      )}
    </button>
  );
};

