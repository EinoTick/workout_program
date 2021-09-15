import React, {useContext} from 'react';
import './exersise-selector.scss';
import Selector from "../selector/Selector";
import {WorkoutContext} from "../../context/WorkoutContext";

const ExerciseSelector = () => {
  const workoutsContext = useContext(WorkoutContext)

  const chestOptions = [
    {value: 'penkki', label: 'penkki'},
    {value: 'pecdec', label: 'pecdec'},
    {value: 'flat', label: 'flat'},
    {value: 'vinopenkki', label: 'vinopenkki'},
    {value: 'viparitsivuille', label: 'viparitsivuille'},
    {value: 'viparityläviistoon', label: 'viparityläviistoon'},
  ]

  const legsOptions = [
    {value: 'kyykky', label: 'kyykky'},
    {value: 'prässi', label: 'prässi'},
    {value: 'pohkeet', label: 'pohkeet'}
  ]

  const ShoulderOptions = [
    {value: 'pystypunnerrustangolla', label: 'pystypunnerrus tangolla'},
    {value: 'ulkokierto', label: 'Ulkokierto taljassa'},
    {value: 'pystypunnerruskp', label: 'pystypunnerrus käsipainoilla'},
    {value: 'Vipunostottal', label: 'Vipunostot taljassa'},
  ]

  const backOptions = [
    {value: 'mave', label: 'mave'},
    {value: 'kulmasoutu', label: 'kulmasoutu'},
    {value: 'leuanveto', label: 'leuanveto'},
    {value: 'ylätalja', label: 'ylätalja'},
    {value: 'alatalja', label: 'alatalja'},
    {value: 'olankohautus', label: 'olankohautus'},
  ]

  const exerciseOptions = [...backOptions, ...legsOptions, ...chestOptions, ...ShoulderOptions];

  //The workouts were split in different return categories so that the developer could have later
  //added different type of default workouts easily. However, altering the contex api states
  //is a better solution and these are merely a relics now.
  if (workoutsContext.split === 1) {
    return (
        <div className="exercise-selector">
          <Selector exercises={workoutsContext.exercises1} setExercises={workoutsContext.setExercises1}
                    exerciseOptions={exerciseOptions}/>
          <Selector exercises={workoutsContext.exercises2} setExercises={workoutsContext.setExercises2}
                    exerciseOptions={exerciseOptions}/>
        </div>
    );

  }

  //2-split(upper/lower), 2-split(push/pull), 3-split
  if (workoutsContext.split === 2 || workoutsContext.split === 3 || workoutsContext.split === 5) {
    return (
        <div className="exercise-selector">
          <Selector exercises={workoutsContext.exercises1} setExercises={workoutsContext.setExercises1}
                    exerciseOptions={exerciseOptions}/>
          <Selector exercises={workoutsContext.exercises2} setExercises={workoutsContext.setExercises2}
                    exerciseOptions={exerciseOptions}/>
          <Selector exercises={workoutsContext.exercises2} setExercises={workoutsContext.setExercises3}
                    exerciseOptions={exerciseOptions}/>
          <Selector exercises={workoutsContext.exercises2} setExercises={workoutsContext.setExercises4}
                    exerciseOptions={exerciseOptions}/>
        </div>
    );
  }

  //3-split
  if (workoutsContext.split === 4) {
    return (
        <div className="exercise-selector">
          <Selector exercises={workoutsContext.exercises1} setExercises={workoutsContext.setExercises1}
                    exerciseOptions={exerciseOptions}/>
          <Selector exercises={workoutsContext.exercises2} setExercises={workoutsContext.setExercises2}
                    exerciseOptions={exerciseOptions}/>
          <Selector exercises={workoutsContext.exercises2} setExercises={workoutsContext.setExercises3}
                    exerciseOptions={exerciseOptions}/>
        </div>
    );
  }

  //5-split
  return (
      <div className="exercise-selector">
        <Selector exercises={workoutsContext.exercises1} setExercises={workoutsContext.setExercises1}
                  exerciseOptions={exerciseOptions}/>
        <Selector exercises={workoutsContext.exercises2} setExercises={workoutsContext.setExercises2}
                  exerciseOptions={exerciseOptions}/>
        <Selector exercises={workoutsContext.exercises2} setExercises={workoutsContext.setExercises3}
                  exerciseOptions={exerciseOptions}/>
        <Selector exercises={workoutsContext.exercises2} setExercises={workoutsContext.setExercises4}
                  exerciseOptions={exerciseOptions}/>
        <Selector exercises={workoutsContext.exercises2} setExercises={workoutsContext.setExercises5}
                  exerciseOptions={exerciseOptions}/>
      </div>
  );
};

export default ExerciseSelector;