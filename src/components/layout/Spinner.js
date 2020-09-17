import React from "react";

function Spinner() {
  return (
    <img
      src={
        "https://raw.githubusercontent.com/bradtraversy/lyricfinder/master/src/components/layout/spinner.gif"
      }
      alt="Loading..."
      style={{ width: "200px", margin: "40px auto", display: "block" }}
    />
  );
}

export default Spinner;
