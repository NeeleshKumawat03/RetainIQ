import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Row from './Row';

const Table = ({ states, setStates, addVariant, deleteState }) => {

  // reordering logic we have re render to show reordeing 
  const handleOnDrag= result => {
    const {destination,source} = result;
    if (!result.destination) return;
    
    
        const newItems= Array.from(states);
        const [reOrdered] = newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, reOrdered);
        setStates(newItems)
    }

  return (
    // Make table calling Row component from here
    <DragDropContext onDragEnd={handleOnDrag}>
      <Droppable droppableId="table">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className='flex flex-col gap-4'>
            {states.map((state, index) => (
              <Row key={state.id} state={state} addVariant={addVariant} variants={state.variants} index={index} deleteState={deleteState} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Table;

