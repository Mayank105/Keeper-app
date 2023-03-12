import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  function handlechange(event) {
    const { name, value } = event.target;
    setnote((prevvalue) => {
      return {
        ...prevvalue,
        [name]: value
      };
    });
  }

  function submitnote(event) {
    props.onadd(note);
    setnote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handlechange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handlechange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
