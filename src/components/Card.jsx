import { motion } from "framer-motion";

const Card = ({ title, description, btn }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", bounce: 0.7 }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <button>{btn}</button>
    </motion.div>
  );
};

export default Card;
