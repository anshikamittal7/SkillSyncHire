import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../data/success.json";
import People from "./People";

import "../styles/success.scss";

const Success = () => {
  return (
    <div id="successstories">
      <h3>Success Stories</h3>
      <div className="poster">
        <section>
          <article>
            <Carousel
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              interval={2000}
              infiniteLoop={true}
              autoPlay={true}
            >
              {data.stories.map((i, index) => (
                <People
                  name={i.name}
                  description={i.description}
                  job_title={i.job_title}
                  email={i.email}
                  image={i.image}
                />
              ))}
            </Carousel>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Success;
