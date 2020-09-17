import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiKey } from "../../config/api";

function Lyrics(props) {
  const [track, setTrack] = useState(null);
  const [lyrics, setLyrics] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${apiKey}`
      )
      .then((res) => {
        setLyrics(res.data.message.body.lyrics);
        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${apiKey}`
        );
      })
      .then((res) => {
        setTrack(res.data.message.body.track);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div></div>;
}

export default Lyrics;
