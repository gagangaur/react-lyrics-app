import React, { createContext } from "react";
import { useState, useEffect } from "react";
const axios = require("axios");
const MyContext = createContext();

export function Provider(props) {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        // console.log(res.data);
        setTracks(res.data.message.body.track_list);
      });
  }, []);
  return (
    <MyContext.Provider value={tracks}>{props.children}</MyContext.Provider>
  );
}

export const Consumer = MyContext.Consumer;
