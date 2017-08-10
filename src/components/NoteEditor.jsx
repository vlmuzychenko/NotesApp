import ReactDOM from 'react-dom';
import React from 'react';
import NoteColor from './NoteColor.jsx';

class NoteEditor extends React.Component {
  construcror(props) {
    this.state = {
      text: ''
    };
  }

  handleTextChange(e) {
    this.setState({text: e.target.value })
  }

  handleNoteAdd() {
    var newNote = {
      text: this.state.text,
      color: this.state.color,
      id: Date.now()
    }

    this.props.onNoteAdd(newNote);
    this.setState({ text: '' });
  }

  handleColorChange(color) {
    this.setState({
      color: color
    });
  }

  render() {
    return (
      <fieldset className="editor">
        <textarea
          placeholder="Enter your note here..."
          className="editor__textarea"
          rows={2}
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <NoteColor onColorChange={this.handleColorChange}/>
        <button className="editor__btn" onClick={this.handleNoteAdd}>Add</button>
      </fieldset>
    );
  }
};

export default NoteEditor;
