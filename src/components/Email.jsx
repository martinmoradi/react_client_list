import React from "react";

const Email = (props) => {

  return (
    <a
      className="btn btn-primary"
      href={`mailto:${props.lastName.toLowerCase()}.${props.firstName.toLowerCase()}@gmail.com`}
    >
      Envoyer un mail
    </a>
  );
}

export default Email;