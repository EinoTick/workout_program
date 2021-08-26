import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import ExerciseSelector from "../components/exercise-selector/ExerciseSelector";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {type: 'spring', delay: 0.5}
  },
  exit: {
    x: "-100vh",
    transition: {ease: 'easeInOut'}
  }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

const Exercises = () => {
  return (
      <motion.div className="exercises container"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
      >
        <h3>Vaihe 2/3: Valitse Itsellesi Sopivat Harjoitukset</h3>
        <ExerciseSelector/>
        <Link to="/complete">
          <motion.button variants={buttonVariants} whileHover="hover">Viimeistele</motion.button>
        </Link>
      </motion.div>
  )
}

export default Exercises;
