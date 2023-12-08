import React from "react";

const Loading = ({ center }) => {
  return <div className={center ? "loading loading-center" : "loading"}></div>;
};

export default Loading;
