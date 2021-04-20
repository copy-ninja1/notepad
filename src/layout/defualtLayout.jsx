import React, { Component } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import "@mdi/font/css/materialdesignicons.min.css";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";

let AppHeader = styled.div({
  position: "fixed",
  width: "100vw",
  // padding: "10px",
  color: "white",
  fontWeight: 800,
  fontSize: 30,
  backgroundColor: "rgb(21, 32, 43)",
});

function _route(Component) {
  return function WrappedComponent(props) {
    const params = useParams();
    const path = useLocation();
    return <Component {...props} id={params.id} path={path.pathname} />;
  };
}
class Layout extends Component {
  render() {
    console.log("this.props.withId : ", this.props.params);
    let { path, id } = this.props;
    // console.log("path : ", path, path != "/note/new");
    return (
      <div>
        <AppHeader>
          <div
            className={css`
              padding: 10px;
            `}
          >
            <Link to="/">Notepad</Link>
            {path !== "/note/new" && !id ? (
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
            ) : id && path !== "/note/new" ? (
              <Link to={`/note/${id}/edit`}>
                <span
                  className={css`
                    float: right;
                    fontsize: 20;
                  `}
                >
                  <i className="mdi mdi-pen"></i>
                </span>
              </Link>
            ) : (
              <></>
            )}
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

export default _route(Layout);
