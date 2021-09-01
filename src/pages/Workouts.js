import React from 'react';
import {motion} from 'framer-motion';
import {useHistory} from "react-router-dom";

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

const Workouts = () => {
  const history = useHistory();

  const redirectToHome = () => {
    history.push('/info');
  }

  return (
      <motion.div className="workouts container"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
      >
        <h1 className="workouts__header">
          Treeniohjelmat
          <span className="workouts__explain" onClick={() => redirectToHome()}>Ohjeet Tästä</span>
        </h1>

        <h3>Koko Kropan Treenit</h3>
        <div className="workout__cards">
          <div className="workout__card">
            <div className="workouts__card-header">Golden Six</div>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
          </div>
          <div className="workout__card">
            <div className="workouts__card-header">Classic Fullbody</div>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
          </div>
        </div>

        <h3>2-jakoinen</h3>
        <div className="workout__cards">
          <div className="workout__card">
            <div className="workouts__card-header">Työntävät ja vetävät</div>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
          </div>
          <div className="workout__card">
            <div className="workouts__card-header">Ylä ja alakroppa</div>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
          </div>
        </div>

        <h3>3-jakoinen</h3>
        <div className="workout__cards">
          <div className="workout__card">
            <div className="workouts__card-header">Rinta, Selkä ja Jalat</div>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
          </div>
          <div className="workout__card">
            <div className="workouts__card-header">Työtävät, vetävät ja Jalat</div>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
          </div>
        </div>

        <h3>4-jakoinen</h3>
        <div className="workout__cards">
          <div className="workout__card">
            <div className="workouts__card-header">Rinta, Selkä, olkapää ja Jalat</div>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
          </div>
          <div className="workout__card">
            <div className="workouts__card-header">Age of Intensity</div>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
          </div>
        </div>

        <h3>5-jakoinen</h3>
        <div className="workout__cards">
          <div className="workout__card">
            <div className="workouts__card-header">Brosplit</div>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
          </div>
          <div className="workout__card">
            <div className="workouts__card-header">Hajautus</div>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
            <CardExercises exercises={["Penkkipunnerrus", "Kyykky", "Hauiskääntö", "Leuanveto", "Pystypunnerrus", "Istumaannousu"]}/>
          </div>
        </div>

      </motion.div>
  );
};

export default Workouts;

const CardExercises = ({exercises}) => {
  return (
      <div className="workouts__exercises">
        {exercises.map((exercise, index) =>
            <div key={index} className="workouts__card-exercise">{exercise}</div>
        )}
      </div>
  )
}