import React from "react";
import convertToLink from "./convertToLink"
import PropTypes from "prop-types";

class Output extends React.Component {
  static get propTypes() {
    return {
      text: PropTypes.string
    };
  }
  render() {
    return (
      <div className="output">
        <h2>Ваш текст:</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: convertToLink(this.props.text),
          }}
        />          
      </div>
    );
  }
}

export { Output };