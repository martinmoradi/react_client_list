import React from "react";

const Phone = (props) => {
  return <a className="btn btn-primary" href={`callto:${props.phone}`}>Appeler</a>;
};

export default Phone