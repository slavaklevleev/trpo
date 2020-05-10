import React from "react";
import { Input } from "./Input";
import { Output } from "./Output";

class UrlValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(text) {
    this.setState({
      text: text,
    });
  }

  render() {
    return (
      <div className="UrlValidation">
        <h1>Лабораторная работа #2</h1>
        <Input text={this.state.text} onTextChange={this.handleTextChange} />
        <Output text={this.state.text} />
      </div>
    );
  }
}

export default UrlValidation;
export { UrlValidation };