// App.js
import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";
import Editor from "./Editor";
import Previewer from "./Previewer";

// Configure marked
marked.setOptions({
  breaks: true,  // Enable line breaks
  gfm: true      // Enable GitHub Flavored Markdown
});

function App() {
  const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

Here's a line.
And here's another line right below it.

[Link to Google](https://www.google.com)

Here's some \`inline code\`

\`\`\`
// Code block
function hello() {
  console.log("Hello, world!");
}
\`\`\`

- First item
- Second item
- Third item

> Here's a blockquote
> With multiple lines!

![Image](https://via.placeholder.com/150)

**This is bold text**`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="App">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Previewer markdown={markdown} />
    </div>
  );
}

export default App;