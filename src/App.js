import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Context";
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lyrics from "./components/Lyrics";

export default function App() {
  return (
    <Provider>
      <Router>
        <Fragment>
          <StylesProvider injectFirst>
            <Navbar />
            <Switch>
              <Route exact path="/lyrics/:id" component={Lyrics} />
            </Switch>
          </StylesProvider>
        </Fragment>
      </Router>
    </Provider>
  );
}
