import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        NoteBook
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
