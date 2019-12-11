import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Context";
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Provider>
      <Router>
        <Fragment>
          <StylesProvider injectFirst>
            <Navbar />
          </StylesProvider>
        </Fragment>
      </Router>
    </Provider>
  );
}
