import React, { useState } from "react";

function CreateArea(props) {
  const [note,setNote] = useState({
    title:"",
    content:""
  });
function handleChange(event){
  const {name,value}=event.target;
  setNote(prevNote=>{
  return{
    ...prevNote,
    [name]:value
  };
  });
}
  return (
    <div>
      <form>
        <input 
        name="title" 
        value={note.title} 
        placeholder="Title" 
          onChange={handleChange}
         
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
         
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onAdd(note);
            setNote({
              title:"",
              content:""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
