import React from "react";



const Editor = ({markdown, handleChange}) => {
  return (
    <div>
     <h1>Markdown Editor</h1>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown here" />
    </div>
  )
}

export default Editor
