// Previewer.jsx
import React from "react";
import { marked } from "marked";

const Previewer = ({ markdown }) => {
  // Create markdown with line break options
  const getMarkdownText = () => {
    return { __html: marked(markdown, { breaks: true, gfm: true }) };
  };

  return (
    <div className="preview-container">
      <h1>Preview</h1>
      <div
        id="preview"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
};

export default Previewer;