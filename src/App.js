import React, { Component } from 'react'
import Text from './Text'
// import TextArea from './TextArea'
import TextBefore from './TextBefore'
// import TextAreaBefore from './TextAreaBefore'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cleaner Markup with React 16</h1>
        <h2>Before</h2>
        {/*<TextBefore id="valid-text-before-id" label="Valid Text" />*/}
        <TextBefore id="invalid-text-before-id" label="Invalid Text" error="Text Error" />
        {/*<TextAreaBefore id="valid-textarea-before-id" label="Valid Text" />*/}
        {/*<TextAreaBefore id="invalid-textarea-before-id" label="Invalid Text" error="Text Error" />*/}
        <h2>After</h2>
        {/*<Text id="valid-text-id" label="Valid Text" />*/}
        <Text id="invalid-text-id" label="Invalid Text" error="Text Error" />
        {/*<TextArea id="valid-textarea-id" label="Valid Text" />*/}
        {/*<TextArea id="invalid-textarea-id" label="Invalid Text" error="Text Error" />*/}
      </div>
    )
  }
}

export default App
