import React, { useContext, useState } from "react";
import axios from "axios";
import { StateContext } from "../../context";
import { apiKey } from "../../config/api";

function Search() {
  const [title, setTitle] = useState("");
  const state = useContext(StateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${title}&page_size=10&page=1&s_track_rating=desc&apikey=${apiKey}`
      )
      .then((res) => {
        state.searchTracks(res.data.message.body.track_list);
      })
      .catch((err) => {
        console.log(err);
      });
    setTitle("");
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music"></i> Search For a Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
          Get lyrics
        </button>
      </form>
    </div>
  );
}

export default Search;
