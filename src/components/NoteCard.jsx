
export default function NoteCard({ note, onDelete }) {
  return (
    <div className="note-card">
      <div className="card-header">
        <h3>{note.title}</h3>
        <button
          onClick={() => onDelete(note.id)}
          className="delete-btn"
          title="Delete Note"
        >
          ✕
        </button>
      </div>
      <p className="card-content">{note.content}</p>
      <small className="timestamp">{note.createdAt}</small>
    </div>
  );
}