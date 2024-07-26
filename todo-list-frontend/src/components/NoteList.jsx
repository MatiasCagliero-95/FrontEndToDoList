import React, { useState, useEffect } from 'react';
import NoteItem from './NoteItem.jsx';
import NoteForm from './NoteForm.jsx';
import './noteList.css'; // Asegúrate de importar el CSS

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:3000/notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addNote = async (note) => {
    try {
      const response = await fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      const newNote = await response.json();
      setNotes([...notes, newNote]);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const updateNoteCompleted = async (id, completed) => {
    try {
      await fetch(`http://localhost:3000/notes/${id}/completed`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed }),
      });
      fetchNotes();
    } catch (error) {
      console.error('Error updating note completed status:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(`http://localhost:3000/notes/${id}`, {
        method: 'DELETE',
      });
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="note-list">
      <h1>Listado de Notas</h1>
      <NoteForm addNote={addNote} />
      <div className="section">
        <h2>Por hacer</h2>
        {notes.filter(note => !note.completed).map(note => (
          <div key={note.id} className={`note-item ${note.completed ? 'completed' : ''}`}>
            <NoteItem
              note={note}
              updateNoteCompleted={updateNoteCompleted}
              deleteNote={deleteNote}
            />
          </div>
        ))}
      </div>
      <div className="section">
        <h2>Hecho</h2>
        {notes.filter(note => note.completed).map(note => (
          <div key={note.id} className={`note-item ${note.completed ? 'completed' : ''}`}>
            <NoteItem
              note={note}
              updateNoteCompleted={updateNoteCompleted}
              deleteNote={deleteNote}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
