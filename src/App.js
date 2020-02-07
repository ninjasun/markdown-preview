import React from 'react';
// Create reference instance
import marked from'marked';

import './App.css';
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

const initialContent = '# Welcome to my React Markdown Previewer!';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      content:'',
      previewContent: ''
    }
    this.onChange = this.onChange.bind(this);
 
  }

  componentDidMount(){
    this.setState({
      content: initialContent
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
