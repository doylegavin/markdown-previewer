// Editor.jsx
import React from "react";

const Editor = ({ markdown, setMarkdown }) => {
  return (
    <div className="editor-container">
      <h1>Editor</h1>
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter Markdown here"
      />
    </div>
  );
};

export default Editor;
