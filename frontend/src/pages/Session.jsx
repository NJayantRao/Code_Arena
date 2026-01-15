import React from "react";
import { useParams } from "react-router-dom";

const Session = () => {
  const params = useParams();
  console.log(params);

  return <div>session</div>;
};

export default Session;
