import ReactDOM from 'react-dom';
import React from 'react';

class Note extends React.Component {
  render() {
    const style = { backgroundColor: this.props.color };
    return (
      <article className="note" style={style}>
        {this.props.children}
        <span className="note__close" onClick={this.props.onDelete}></span>
      </article>
    );
  }
};

export default Note;
