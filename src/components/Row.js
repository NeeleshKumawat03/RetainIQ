import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { BiPlus, BiPlusCircle } from 'react-icons/bi';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { PiDotsNineBold } from 'react-icons/pi';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const Row = ({ state, variants, index, addVariant, deleteState }) => {

  const [design, setDesign] = useState('')

  // handle delete state logic(function)
  const handleDelete = () => {
    deleteState(state.id);
  };

  // insert design function
  const handleInsertDesign = (variantIndex) => {
    console.log(variantIndex)
  };


  return (
    // used react-beaitiful-dnd to make rows draggable 

      <Draggable draggableId={`state-${state.id}`} index={index}>
      {(provided) => (
        <div
          className={variants.length > 4 ? "flex flex-row items-center border-b border-gray-200 py-2 group overflow-x-scroll" : "flex flex-row items-center border-b border-gray-200 py-2 group"}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* state no delete button */}
          <div className='flex flex-col w-[25vw] h-1/5 m-5 items-center'>
            <div className='flex items-center text-4xl font-bold'>
              <p>{state.id}</p>
              <PiDotsNineBold />
            </div> 
            <div className="">
              <button onClick={handleDelete} className="opacity-0 group-hover:opacity-100 px-4 py-2 text-red-500"><RiDeleteBin2Fill size={22}/></button>
            </div>
          </div>

          {/* state name */}
          <div className='flex flex-col w-[25vw] justify-center bg-white rounded-md'>
            <div className="px-4 py-2 text-center font-bold">{state.name}</div>
          </div>
          
          {/* rendering varients varient along with design button */}
          {variants.map((variant, idx) => (
            <div key={variant} className="mx-12 px-4 py-2 w-[25vw] bg-white flex flex-col items-center rounded-lg">
              <p className='px-4 py-2 font-bold'>{variant}</p>
              <button
            onClick={() => handleInsertDesign(idx)}
            className="ml-2 flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
          >
            <BiPlus/> {"Add Design"}
            {/* <FaRegEdit /> */}
          </button>
            </div>
          ))}

          {/* add varient button */}
          <button onClick={() => addVariant(state.id)} className="text-black px-3 py-1.5 mr-2 border-2 border-green-400 rounded-md">
            <BiPlusCircle size={22}/>
          </button>
        </div>
      )}
    </Draggable>
    
  );
};

export default Row;


