import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [newNote, setNewNote] = useState({
    title: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(newNote);
    setNewNote({
      title: '',
      description: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newNote.title}
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={newNote.description}
        onChange={(e) => setNewNote({ ...newNote, description: e.target.value })}
        placeholder="Description"
        required
      />
      <button type="submit">Agregar Nota</button>
    </form>
  );
};

export default NoteForm;
