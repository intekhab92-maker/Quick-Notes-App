
import NoteCard from "./NoteCard";

export default function NotesGrid({ notes, onDeleteNote }) {
  if (notes.length === 0) {
    return <p className="empty-state">No notes found. Create your first note!</p>;
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDeleteNote} />
      ))}
    </div>
  );
}