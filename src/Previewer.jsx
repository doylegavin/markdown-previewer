import React from "react";
import { marked } from "marked";




const Previewer = ({markdown}) => {
  return (
    <div>
    <h1>Markdown Previewer</h1>

    <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />  
        

    
    </div>
  )
}

export default Previewer
