import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Item, setItem] = useState([]);
  function handleAdd(note) {
    setItem((prevItem) => {
      return [...prevItem, note];
    });
  }

  function deleteNote(id) {
    setItem((prevNotes) => {
      return prevNotes.filter((nodeItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {Item.map((noteItem,index) => {
        return (
          <Note
          key={index}
          id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
