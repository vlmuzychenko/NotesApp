import ReactDOM from 'react-dom';
import React from 'react';

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

class NoteColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteColor: THEME,
      selectedColor: '1'
    };

    this.colorChange = this.colorChange.bind(this);
  }

  colorChange(e) {
    this.setState({
      selectedColor: e.target.value
    });
    this.props.onColorChange(this.state.noteColor[e.target.value-1].color);
  }

  render() {
    return (
      <div className="color-picker">
        {
          this.state.noteColor.map((item) => {
            return (
              <label
                className={"colors-picker__item" + (this.state.selectedColor == item.id ?  " is-checked" : "")}
                style={{backgroundColor: item.color, borderColor: item.color}}
                key = {item.id}>
                  <input className="color-picker__radio"
                    type="radio"
                    value={item.id}
                    checked={this.state.selectedColor == item.id}
                    onChange={this.colorChange}
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
