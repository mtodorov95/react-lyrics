import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiKey } from "../../config/api";
import Spinner from "../layout/Spinner";

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

  if (
    !track ||
    !lyrics ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />;
  } else {
    return (
      <div className="container">
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track_name} by{" "}
            <span className="text-secondary">{track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Genre</strong>:{" "}
            {
              track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
            }
          </li>
          <li className="list-group-item">
            <strong>Album Name</strong>: {track.album_name}
          </li>
          <li className="list-group-item">
            <strong>Explicit words</strong>:{" "}
            {track.explicit === 0 ? "No" : "Yes"}
          </li>
        </ul>
      </div>
    );
  }
}

export default Lyrics;
