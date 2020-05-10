import React from "react";
import convertToLink from "./convertToLink"

class Output extends React.Component {
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