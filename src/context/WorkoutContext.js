import {createContext, useState} from "react";

export const WorkoutContext = createContext(undefined);

export const WorkoutProvider = ({children}) => {
  const [split, setSplit] = useState(1  )
  const [exercises1, setExercises1] = useState([]  )
  const [exercises2, setExercises2] = useState([]  )
  const [exercises3, setExercises3] = useState([]  )
  const [exercises4, setExercises4] = useState([]  )
  const [exercises5, setExercises5] = useState([]  )
  const [exercises6, setExercises6] = useState([]  )

  return (
      <WorkoutContext.Provider value={{
        split,
        setSplit,
        exercises1,
        setExercises1,
        exercises2,
        setExercises2,
        exercises3,
        setExercises3,
        exercises4,
        setExercises4,
        exercises5,
        setExercises5,
        exercises6,
        setExercises6,
      }}>
        {children}
      </WorkoutContext.Provider>
  )


}