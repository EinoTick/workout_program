import React, {useContext} from 'react';
import {motion} from 'framer-motion';
import {WorkoutContext} from "../context/WorkoutContext";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
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

const Complete = () => {
  const workoutsContext = useContext(WorkoutContext)

  console.log('workoutsContext.exercises1: ', workoutsContext.exercises1)
  console.log('workoutsContext.exercises2: ', workoutsContext.exercises2)
  console.log('workoutsContext.split: ', workoutsContext.split)

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
            <WorkoutCard header={"Treeni 3: "} exercise={workoutsContext.exercises4}/>
          }
          { hasFourOrMore() &&
            <WorkoutCard header={"Treeni 4: "} exercise={workoutsContext.exercises5}/>
          }
          { hasFiveOrMore() &&
            <WorkoutCard header={"Treeni 5: "} exercise={workoutsContext.exercises6}/>
          }
        </div>
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
