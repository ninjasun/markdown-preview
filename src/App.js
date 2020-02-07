import React from 'react';

import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      content:'',
      previewContent: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    console.log("onChange: ", e)
    this.setState({
      content: e.target.value,
      previewContent: e.target.value
    })
  }

  render() {
    const { content, previewContent } = this.state;
    return (
      <div className="App">
        <textarea id="editor" onChange={this.onChange} value={content}/>
          
        <div id="preview">
          {previewContent}
        </div>
      </div>
    );
  }
}

export default App;
