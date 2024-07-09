import './App.css'
import React, { useState } from 'react';
import Controls from './components/Controls';
import Table from './components/Table';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [states, setStates] = useState([{ id: 1, name: 'State 1', variants: ["varient1", "varient2"] }]);
  const variants = [];

  const addState = () => {
    const newState = { id: states.length + 1, name: `State ${states.length + 1}`, variants: ["varient1", "varient2"] };
    setStates([...states, newState]);
    toast.success("State Added")
    
  };

  const deleteState = (id) => {
    const updatedStates = states.filter((state) => state.id !== id);
    setStates(updatedStates);
    toast.success("State Removed")
  };

  const addVariant = (id) => {
    const prevVariants = states.find((state) => state.id === id)
    const newVariant = `Variant ${prevVariants.variants.length + 1}`;
    const variants = [...prevVariants.variants, newVariant];
    
    let updatedStates = states.map((state) => {
      if(state.id === id) {
        state.variants = variants
        return state;
      }
      return state;
    })
    console.log("updatedStates: ", updatedStates)
    setStates(updatedStates)
    toast.success("Variant Added")
  };


  return (
    <div className="container p-5 mt-5 mx-auto bg-slate-100 border-2 border-blue-100 rounded-xl">
      <Toaster/>
      <h1 className='font-bold text-3xl text-green-400'>Product Filters</h1>
      <Table states={states} setStates={setStates} variants={variants} addVariant={addVariant} deleteState={deleteState} />
      <Controls 
        addState={addState}
      />
    </div>
  );
};

export default App;
