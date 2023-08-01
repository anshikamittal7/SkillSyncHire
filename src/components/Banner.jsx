import React from "react";
import { motion } from "framer-motion";

import amazon from "../media/logos/amazon.png";
import apple from "../media/logos/Apple-Logo-Design.webp";
import ford from "../media/logos/Ford.webp";
import google from "../media/logos/Google.webp";
import hewlett from "../media/logos/Hewlett.webp";
import honda from "../media/logos/Honda.webp";
import ibm from "../media/logos/IBM.webp";

import ms from "../media/logos/Microsoft.webp";
import samsung from "../media/logos/Samsung.webp";
import shell from "../media/logos/Shell-Logo-Design.webp";
import walmart from "../media/logos/Walmart-Logo-Design.webp";
import toyota from "../media/logos/Toyota.webp";
import twitter from "../media/logos/twitter.jpg";
import tcs from "../media/logos/tcs.jpg";

import newgen from "../media/logos/newgen.jpg";
import cisco from "../media/logos/cisco.jpg";
import salesforce from "../media/logos/salesforce.jpg";
import linkedin from "../media/logos/linkedin.jpg";
import aws from "../media/logos/aws.jpg";
import paytm from "../media/logos/paytm.jpg";
import ola from "../media/logos/ola.jpg";

const Banner = () => {
  return (
    <>
      <div className="banner"></div>
      <div className="bannercontent">
        <motion.h1
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          initial={{ opacity: 0, x: "-100%" }}
        >
          Path to Success
        </motion.h1>
        <motion.p
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: "-100%" }}
          transition={{ delay: 0.5 }}
        >
          "Hiring talent is not just about finding a perfect piece to fit a
          puzzle; it's about discovering a brilliant star that can illuminate
          the entire sky of your organization's success."
        </motion.p>
        <div>
          <button>Find Job</button>
          <button>Hire Talent</button>
        </div>
      </div>
      <div id="companies" className="banner2">
        <h3>Companies we are connected to!</h3>
        <div className="box">
          <div className="logos">
            <div className="logos-slide">
              <img src={amazon} alt="img" />
              <img src={apple} alt="img" />
              <img src={google} alt="img" />
              <img src={ford} alt="img" />
              <img src={ibm} alt="img" />
              <img src={honda} alt="img" />
              <img src={hewlett} alt="img" />
            </div>
            <div className="logos-slide">
              <img src={amazon} alt="img" />
              <img src={apple} alt="img" />
              <img src={google} alt="img" />
              <img src={ford} alt="img" />
              <img src={ibm} alt="img" />
              <img src={honda} alt="img" />
              <img src={hewlett} alt="img" />
            </div>
          </div>
          <div className="logos">
            <div className="logos-slide">
              <img src={ms} alt="img" />
              <img src={shell} alt="img" />
              <img src={toyota} alt="img" />
              <img src={samsung} alt="img" />
              <img src={walmart} alt="img" />
              <img src={twitter} alt="img" />
              <img src={tcs} alt="img" />
            </div>
            <div className="logos-slide">
              <img src={ms} alt="img" />
              <img src={shell} alt="img" />
              <img src={toyota} alt="img" />
              <img src={samsung} alt="img" />
              <img src={walmart} alt="img" />
              <img src={twitter} alt="img" />
              <img src={tcs} alt="img" />
            </div>
          </div>
          <div className="logos">
            <div className="logos-slide">
              <img src={salesforce} alt="img" />
              <img src={newgen} alt="img" />
              <img src={linkedin} alt="img" />
              <img src={cisco} alt="img" />
              <img src={aws} alt="img" />
              <img src={ola} alt="img" />
              <img src={paytm} alt="img" />
            </div>
            <div className="logos-slide">
              <img src={salesforce} alt="img" />
              <img src={newgen} alt="img" />
              <img src={linkedin} alt="img" />
              <img src={cisco} alt="img" />
              <img src={aws} alt="img" />
              <img src={ola} alt="img" />
              <img src={paytm} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
