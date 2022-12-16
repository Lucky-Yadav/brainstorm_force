
import React, { useState, useEffect } from "react";
import axios from "axios";

const Grid = () => {
    axios
      .get(
        `https://api.spacexdata.com/v3/capsules`
      )
      .then((res) => {
        console.log(res.data);
        // setImage([...images, ...res.data.results]);
      });
  return (
    <div>Grid</div>
  )
}

export default Grid