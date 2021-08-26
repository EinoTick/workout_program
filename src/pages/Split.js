import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {WorkoutContext} from "../context/WorkoutContext";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  },
  exit: {
    x: "-100vh",
    transition: {ease: 'easeInOut'}
  }
}

const nextVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {type: 'spring', stiffness: 110}
  }
}

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

const Split = () => {
  const [showButton, setShowButton] = useState(false)
  const workoutsContext = useContext(WorkoutContext)

  const updateSplit = (split) => {
    setShowButton(true)
    workoutsContext.setSplit(split.id)
  }

  const splitOptions = [
    {
      id: 1,
      name: 'Koko kropan Treeni',
      description: 'Jokaisen treenin aikana käydään koko kroppa läpi. Tämä treeni perustuu kattaviin liikkeisiin kuten kyykky ja penkki.',
    },
    {
      id: 2,
      name: 'Ylä/ala kropan treenit',
      description: '2-jakoinen treeni, jossa vuorotellaan yläkropan ja alakropan lihasten treenaamista.',
    },
    {
      id: 3,
      name: 'Push/pull',
      description: '2-jakoinen treeni, jossa vuorotellaan työtäviä ja vetäviä liikkeitä, kuten kyykky/maastaveto ja penkki/ylätalja.',
    },
    {
      id: 4,
      name: '3 jakoinen',
      description: '3 osaan jaettu treeni, jossa treenataan yläkropan työntävät, yläkropan vetävät ja jalat eri treenipäivinä.',
    },
    {
      id: 5,
      name: '4 jakoinen',
      description: '4 osaan jaettu treeni, jossa treenataan rinta/hauis, olkapää/ojentaja, selkä ja jalat eri treenipäivinä.',
    },
    {
      id: 6,
      name: '5 jakoinen',
      description: '5 osaan jaettu treeni, jossa treenataan rinta, olkapää, kädet, selkä ja jalat eri treenipäivinä.',
    },
  ]

  return (
      <motion.div className="split container"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
      >
        <h3>Vaihe 1/3: Valitse Treenijako</h3>
        <ul>
          {splitOptions.map(split => {
            //WorkoutContext.split shows the id directly (there is no other data in it)
            let spanClass = workoutsContext.split === split.id ? 'selected' : '';
            return (
                <motion.li key={split.id} onClick={() => updateSplit(split)} whileHover={{scale: 1.05}}>
                  <div className={'workout ' + spanClass}>
                    <div className="split-name">{split.name}</div>
                    <div className="split-description">{split.description}</div>
                  </div>
                </motion.li>
            )
          })}
        </ul>

        <div className="next">
          {showButton && (
              <motion.div className="" variants={nextVariants}>
                <Link to="/exercises">
                  <motion.button variants={buttonVariants} whileHover="hover" >Seuraava</motion.button>
                </Link>
              </motion.div>
          )}
        </div>

      </motion.div>
  )
}

export default Split;
