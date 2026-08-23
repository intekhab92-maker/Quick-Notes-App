import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;

    onAddNote({
      title: title.trim() || "Untitled Note",
      content: content.trim(),
    });

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Note Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-title"
      />
      <textarea
        placeholder="Take a quick note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="3"
        className="input-textarea"
      />
      <button type="submit" className="add-btn">
        + Add Note
      </button>
    </form>
  );
}