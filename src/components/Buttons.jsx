export default function Buttons({ title, isActive, onClick }) {
  return (
    <div className="bg-white p-3">
      <button
        onClick={onClick}
        className={`btn ${isActive ? "btn-warning" : "btn-primary"}`}
        type="button"
      >
        {title}
      </button>
    </div>
  );
}
