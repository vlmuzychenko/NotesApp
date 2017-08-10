import ReactDOM from 'react-dom';
import React from 'react';
import NoteEditor from './NoteEditor.jsx';
import NoteGrid from './NoteGrid.jsx';

import './NotesApp.css';

const THEME = [
  {
    id: 1,
    color: '#995193'
  },
  {
    id: 2,
    color: '#F25F5C'
  },
  {
    id: 3,
    color: '#FFE066'
  },
  {
    id: 4,
    color: '#247BA0'
  },
  {
    id: 5,
    color: '#70C1B3'
  }
];

class NotesApp extends React.Component {
  construcror(props) {
    this.state = {
      notes: [],
      filter: ''
    };
  }

  componentDidMount() {
    const localNotes = JSON.parse(localStorage.getItem('notes'));
    if (localNotes) {
      this.setState({ notes: localNotes });
    }
  }

  componentDidUpdate() {
    this._updateLocalStorage();
  }

  handleNoteAdd(newNote) {
    var newNotes = this.state.notes.slice();
    newNotes.unshift(newNote);
    this.setState({ notes: newNotes });
  }

  handleNoteDelete(note) {
    const noteId = note.id;
    const newNotes = this.state.notes.filter(function(note) {
      return note.id !== noteId;
    });
    this.setState({ notes: newNotes });
  }

  handleSearch() {
    const searchQuery = this.refs.search.value.toLowerCase();
    this.setState({filter: searchQuery})
  }

  filterNotes(notes, filter) {
    if (filter != '') {
      const searchNotes = this.state.notes.filter(function (note) {
        const searchNote = note.text.toLowerCase();
        return searchNote.indexOf(filter) !== -1;
      });
      return searchNotes;
    }
    return notes;
  }

  render() {
    return (
      <div className="notes-app">
        <header className="notes-app__header">
          <h1 className="notes-app__title">Notes App</h1>
        </header>
        <div className="notes-app__container">
          <div className="search">
            <input type="text" placeholder="Search..." ref="search" className="search__field" onChange={this.handleSearch}/>
          </div>

          <NoteEditor onNoteAdd={this.handleNoteAdd} />
          <NoteGrid notes={this.filterNotes(this.state.notes, this.state.filter)} onNoteDelete={this.handleNoteDelete} />
        </div>

      </div>
    );
  }

  _updateLocalStorage() {
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  }
};

export default NotesApp;
