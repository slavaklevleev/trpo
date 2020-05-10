import React from "react";
import TextareaAutosize from "react-textarea-autosize";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.props.onTextChange(e.target.value);
  }

  render() {
    return (
      <div className="input">
        <h2>Введите текст:</h2>
        <TextareaAutosize
          minRows={15}
          value={this.props.text}
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}

export default Input;
export { Input };