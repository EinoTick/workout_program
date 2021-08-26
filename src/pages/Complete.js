import React, {useContext} from 'react';
import {motion} from 'framer-motion';
import {WorkoutContext} from "../context/WorkoutContext";
import {Link} from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    transition: {
      staggerChildren: 0.2,
    }
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.3,
      when: "beforeChildren",
    }
  },
  exit: {
    x: "-100vh",
    transition: {ease: 'easeInOut'}
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 4px rgb(255,255,255)",
    boxShadow: "0px 0px 4px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

const Complete = () => {
  const workoutsContext = useContext(WorkoutContext)

  const hasThreeOrMore = () => {
    return workoutsContext.split > 1;
  }

  const hasFourOrMore = () => {
    return workoutsContext.split === 2 || workoutsContext.split === 3 || workoutsContext.split === 5 || workoutsContext.split === 6;
  }

  const hasFiveOrMore = () => {
    return workoutsContext.split === 6;
  }

  return (
      <motion.div className="container complete"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
      >
        <h2>Tallenna Harjoitus</h2>
        <div className="complete__card-grid">
          <WorkoutCard header={"Treeni 1: "} exercise={workoutsContext.exercises1}/>
          <WorkoutCard header={"Treeni 2: "} exercise={workoutsContext.exercises2}/>
          { hasThreeOrMore() &&
            <WorkoutCard header={"Treeni 3: "} exercise={workoutsContext.exercises3}/>
          }
          { hasFourOrMore() &&
            <WorkoutCard header={"Treeni 4: "} exercise={workoutsContext.exercises4}/>
          }
          { hasFiveOrMore() &&
            <WorkoutCard header={"Treeni 5: "} exercise={workoutsContext.exercises5}/>
          }
        </div>
        <Link to="/exercises">
          <motion.button variants={buttonVariants} whileHover="hover">Edellinen</motion.button>
        </Link>
      </motion.div>
  )
}

export default Complete;


const WorkoutCard = ({exercise, header}) => {
  return (
      <div className="complete__workout-card">
        <motion.p variants={childVariants}>{header}</motion.p>
        {
          exercise.map((exercise, index) =>
              <motion.div key={index} variants={childVariants}>
                {exercise.label}
              </motion.div>
          )
        }
      </div>
  )
}
