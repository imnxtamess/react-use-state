export default function Buttons({ title }) {
  return (
    <div className="bg-white p-3">
      <button class="btn btn-primary" type="button">
        {title}
      </button>
    </div>
  );
}
