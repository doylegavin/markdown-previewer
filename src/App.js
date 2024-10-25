import React, { useState } from "react";
import { marked } from "marked";
import "./App.css"; // Optional, for your custom styling
import Editor from "./Editor";
import Previewer from "./Previewer";


function App() {
  const defaultMarkdown = `
# This is a heading (H1)
## This is a sub-heading (H2)
[Link to Google](https://www.google.com)
\`Inline code\`
\`\`\`
// Code block
function hello() {
  console.log("Hello, world!");
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://c7.alamy.com/comp/2MB1WXF/concept-of-tourism-and-vacation-close-up-of-cool-guy-in-summer-hat-and-sunglasses-pointing-finger-guns-at-camera-standing-over-yellow-background-2MB1WXF.jpg)
**Bold text**
`;

const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <Editor markdown={markdown} onChange={handleChange} />
      <Previewer markdown={markdown} />
      
    </div>
  );
}

export default App;
