import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);

  function addnote(newnote) {
    setnotes((prevnotes) => {
      return [...prevnotes, newnote];
    });
  }

  function deletenote(id) {
    setnotes((prevnotes) => {
      return prevnotes.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onadd={addnote} />
      {notes.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            onDelete={deletenote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
