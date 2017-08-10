import ReactDOM from 'react-dom';
import React from 'react';
import Note from './Note.jsx';

class NoteGrid extends React.Component {
  componentDidMount() {
    var grid = this.refs.grid;
    this.msnry = new Masonry( grid, {
      itemSelector: '.note',
      columnWidth: 250,
      gutter: 10,
      isFitWidth: true
    });
  }

  componentDidUpdate(prevProps) {
      if(this.props.notes.length !== prevProps.notes.length) {
        this.msnry.reloadItems();
        this.msnry.layout();
      }
  }

  render() {
    const onNoteDelete = this.props.onNoteDelete;

    return (
      <div className="notes-container" ref="grid">
        {
          this.props.notes.map(function(note) {
            return (
              <Note
                key={note.id}
                onDelete={onNoteDelete.bind(null, note)}
                color={note.color}>
                {note.text}
              </Note>);
          })
        }
      </div>
    );
  }
};

export default NoteGrid;
