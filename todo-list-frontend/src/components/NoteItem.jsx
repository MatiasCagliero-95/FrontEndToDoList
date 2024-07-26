import React from 'react';

const NoteItem = ({ note, updateNoteCompleted, deleteNote }) => {
  const handleCompleteChange = () => {
    updateNoteCompleted(note.id, !note.completed);
  };

  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <input
        type="checkbox"
        checked={note.completed}
        onChange={handleCompleteChange}
      />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default NoteItem;
