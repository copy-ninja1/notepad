import React, { Component } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import "@mdi/font/css/materialdesignicons.min.css";
import { Link } from "react-router-dom";

let AppHeader = styled.div({
  position: "fixed",
  width: "100vw",
  // padding: "10px",
  color: "white",
  fontWeight: 800,
  fontSize: 30,
  backgroundColor: "rgb(21, 32, 43)",
});

class Layout extends Component {
  render() {
    return (
      <div>
        <AppHeader>
          <div
            className={css`
              padding: 10px;
            `}
          >
            Notepad{" "}
            <Link to="/note/new">
              <span
                className={css`
                  float: right;
                  fontsize: 20;
                `}
              >
                <i className="mdi mdi-plus"></i>
              </span>
            </Link>
          </div>
        </AppHeader>
        <div
          className={css`
            padding-top: 60px;
          `}
        >
          {this.props.children}
        </div>
        <div>{/*  */}</div>
      </div>
    );
  }
}

export default Layout;
