import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return (
        <React.Fragment>
            <h1>{err}</h1>
            <p>{info}</p>
        </React.Fragment>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
