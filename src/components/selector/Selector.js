import React from 'react';
import CreatableSelect from 'react-select/creatable';

const Selector = ({exercises, setExercises, exerciseOptions}) => {
  return (
      <>
        <CreatableSelect
            isClearable
            onChange={setExercises}
            options={exerciseOptions}
            //defaultValue={exerciseOptions[0]}
            isMulti
        />
      </>
  );
};

export default Selector;
