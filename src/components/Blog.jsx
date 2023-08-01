import React from "react";
import { motion } from "framer-motion";

import img1 from "../media/blogimgs/Embracing Technology for Efficiency.jpg";
import img2 from "../media/blogimgs/Personalized.png";
import img3 from "../media/blogimgs/connections.png";
import img4 from "../media/blogimgs/Nurturing.jpg";
import img5 from "../media/blogimgs/Continuous-Learning.png";
import img6 from "../media/blogimgs/Data Privacy.jpg";
import img7 from "../media/blogimgs/Secure-payment-processing.svg";

const Blog = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
    five: {
      opacity: 0,
      x: "-100%",
    },
    sixAndSeven: {
      opacity: 0,
      y: "-100%",
    },
  };
  return (
    <div id="blog">
      <h3>SkillSyncHiring Blog</h3>
      <section>
        <motion.div
          className="section1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h4>Embracing Technology for Efficiency</h4>
          <p>AI-powered matching for quick and precise job opportunities.</p>
          <img src={img1} alt="img" />
        </motion.div>

        <motion.div
          className="section2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <h4>Personalized Candidate Profiles</h4>
          <p>
            Personalized candidate profiles reflecting unique aspirations and
            values.
          </p>
          <img src={img2} alt="img" />
        </motion.div>

        <motion.div
          className="section3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <h4>Fostering Meaningful Employer-Candidate Connections</h4>
          <p>Building meaningful connections through interactive features.</p>
          <img src={img3} alt="img" />
        </motion.div>

        <motion.div
          className="section4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <h4>Nurturing Startups and Small Businesses</h4>
          <p>Bridging startups to exceptional talent for growth.</p>
          <img src={img4} alt="img" />
        </motion.div>

        <motion.div
          className="section5"
          whileInView={animations.whileInView}
          initial={animations.five}
        >
          <h4>Continuous Learning and Development</h4>
          <p>Continuous learning resources for career development.</p>
          <img src={img5} alt="img" />
        </motion.div>

        <motion.div
          className="section6"
          whileInView={animations.whileInView}
          initial={animations.sixAndSeven}
        >
          <h4>Data Privacy and Confidentiality</h4>
          <p>Robust data privacy safeguards user information.</p>
          <img src={img6} alt="img" />
        </motion.div>

        <motion.div
          className="section7"
          whileInView={animations.whileInView}
          initial={animations.sixAndSeven}
          transition={{
            delay: 0.2,
          }}
        >
          <h4>Secure Payment Processing</h4>
          <p>Secure payment processing for premium services.</p>
          <img src={img7} alt="img" />
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
