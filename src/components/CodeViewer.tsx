// src/components/CodeViewer.tsx
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy, FaCheck } from "react-icons/fa";

interface CodeViewerProps {
  code: string;
  language: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ code, language }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <SyntaxHighlighter language={language} style={theme}>
        {code}
      </SyntaxHighlighter>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded"
      >
        {isCopied ? <FaCheck /> : <FaRegCopy />}
      </button>
    </div>
  );
};

export default CodeViewer;
