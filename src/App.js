import React from 'react';
// Create reference instance
import marked from'marked';

import './App.css';


const singleCode = "`<div></div>`";
const start = "```";
const end = "```";
const code = `
// this is code
function anotherExample(firstLine, lastLine) {
  if (firstLine == 5 && lastLine == 6) {
    return 11;
  }
}
`
const multilineCode = start + code + end;

const header = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

[links](https://www.freecodecamp.com)

1. And there are numbererd lists too. 
1. Use just 1s if you want!

**bold**

> Block Quotes!

${singleCode}

${multilineCode}

![React Logo w/ Text](https://goo.gl/Umyytc)
`


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      content:'',
      previewContent: ''
    }
    this.onChange = this.onChange.bind(this);
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }

  componentDidMount(){
    let mar = marked(header);

    this.setState({
      content: header,
      previewContent: mar
    })
  }

  onChange(e){
    console.log("onChange: ", e.target.value);
    let mar = marked(e.target.value);
    this.setState({
      content: e.target.value,
      previewContent: mar
    })
  }

  render() {
    const { content, previewContent } = this.state;
    return (
      <div className="App">
        <div className="editor-container">
          <div className="editor-header">
             <p className="editor-title">Editor</p>
          </div>
          <textarea id="editor" onChange={this.onChange} value={content}/>
        </div>
        
        <div id="preview" dangerouslySetInnerHTML={{ __html: previewContent }} />

      </div>
    );
  }
}

export default App;
