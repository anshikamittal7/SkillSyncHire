import React from "react";
import Card from "./Card";
import data from "../data/jobs.json";
const Jobs = () => {
  return (
    <div id="jobdescription" className="jobs">
      <h3>Job Descriptions</h3>
      <div className="grid-container">
        {data.jobs.map((jobData, index) => (
          <Card
            key={index}
            title={jobData.job_title}
            description={jobData.description}
            btn={jobData.view_job_description}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
