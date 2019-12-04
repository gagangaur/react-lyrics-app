import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import About from "./components/About";
import Main from "./components/Main";
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const axios = require("axios");

export default function App() {
  async function getUser() {
    try {
      let response = await axios.get(
        `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&quorum_factor=1&apikey=${process.env.REACT_APP_MM_KEY}`
        // `https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=callback&country=us&apikey=${process.env.REACT_APP_MM_KEY}`
      );
      const tracks = JSON.parse(
        response.data.substring(9, response.data.length - 2)
      ).message.body;
      console.log(tracks);
    } catch (error) {
      console.error(error);
    }
  }
  // getUser();
  return (
    <Router>
      <div>
        <StylesProvider injectFirst>
          <Navbar />
          {/* <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search" component={Search} />
            <Route render={() => <h2>404 ERROR</h2>} />
          </Switch> */}
        </StylesProvider>
      </div>
    </Router>
  );
}
