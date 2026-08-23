import { useState, useEffect } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NotesGrid from "./components/NotesGrid";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("quick_notes_app");
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("quick_notes_app", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = ({ title, content }) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteForm onAddNote={handleAddNote} />
      <NotesGrid notes={filteredNotes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}