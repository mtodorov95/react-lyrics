import React from "react";
import Search from "../api/Search";
import Tracks from "../api/Tracks";

function Dashboard() {
  return (
    <div className="container">
      <Search />
      <Tracks />
    </div>
  );
}

export default Dashboard;
