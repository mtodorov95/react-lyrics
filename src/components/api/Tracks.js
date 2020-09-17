import React, { useContext } from "react";
import { StateContext } from "../../context";
import Spinner from "../layout/Spinner";

function Tracks() {
  const state = useContext(StateContext);
  console.log(state);
  if (state.trackList == undefined || state.trackList.length == 0) {
    return <Spinner />;
  } else {
    return <h1>Loaded</h1>;
  }
}

export default Tracks;
