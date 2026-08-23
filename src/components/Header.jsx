
export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="notes-header">
      <h1>📝 Quick Notes</h1>
      <input
        type="text"
        placeholder="🔍 Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </header>
  );
}