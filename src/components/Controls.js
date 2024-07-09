import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';

// Implementing a addState functionality here
const Controls = ({ addState }) => {
  return (
    <div className="flex mb-4 mt-4">
      <button onClick={addState} className="text-black px-3 py-1.5 mr-2 border-2 border-blue-400 rounded-md">
        <BiPlusCircle size={22}/>
      </button>
    </div>
  );
};

export default Controls;
