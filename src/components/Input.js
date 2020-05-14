import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import PropTypes from "prop-types";

class Input extends React.Component {
  static get propTypes() {
    return {
      text: PropTypes.string,
      onTextChange: PropTypes.func
    };
  }

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
