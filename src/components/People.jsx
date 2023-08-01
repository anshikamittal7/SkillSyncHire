import React from "react";

const People = ({ name, description, job_title, email, image }) => {
  return (
    <div className="people">
      <div className="img">
        <img src={ image } alt="img" />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <h4>{job_title}</h4>
        <p>{description}</p>
        <a href={`mailto:${email}`}>
          <button>Contact</button>
        </a>
      </div>
    </div>
  );
};

export default People;
