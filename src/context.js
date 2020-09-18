import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { apiKey } from "./config/api";

export const StateContext = createContext();

function Provider(props) {
  const [trackList, setTrackList] = useState([]);
  const [heading, setHeading] = useState("Top 10 Tracks");

  const searchTracks = (tracks) => {
    setTrackList(tracks);
    setHeading("Search Results");
  };

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apiKey}`
      )
      .then((res) => {
        console.log(res);
        setTrackList(res.data.message.body.track_list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <StateContext.Provider value={{ trackList, heading, searchTracks }}>
      {props.children}
    </StateContext.Provider>
  );
}

export default Provider;
