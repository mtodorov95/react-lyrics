import React, { useContext } from "react";
import { StateContext } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "./Track";

function Tracks() {
  const state = useContext(StateContext);
  console.log(state);
  if (state.trackList === undefined || state.trackList.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div>
        <h3 className="text-center mb-4">{state.heading}</h3>
        <div className="row">
          {state.trackList.map((item) => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </div>
    );
  }
}

export default Tracks;
