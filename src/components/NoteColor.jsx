import ReactDOM from 'react-dom';
import React from 'react';

class NoteColor extends React.Component {
  construcror(props) {
    this.state = {
      noteColor: THEME,
      selectedColor: '1'
    };
  }

  colorChange(e) {
    this.setState({
      selectedColor: e.target.value
    });
    this.props.onColorChange(this.state.noteColor[e.target.value-1].color);
  }

  render() {
    const that = this;
    return (
      <div className="color-picker">
        {
          this.state.noteColor.map(function(item) {
            return (
              <label
                className={"colors-picker__item" + (that.state.selectedColor == item.id ?  " is-checked" : "")}
                style={{backgroundColor: item.color, borderColor: item.color}}
                key = {item.id}>
                  <input className="color-picker__radio"
                    type="radio"
                    value={item.id}
                    checked={that.state.selectedColor == item.id}
                    onChange={that.colorChange}
                  />
              </label>
            )
          })
        }
      </div>
    );
  }
};

export default NoteColor;
