export default function Descriptions({ description, title }) {
  return (
    <div className="card">
      <div className="card-header fw-bold">{title}</div>
      <div className="card-body">{description}</div>
    </div>
  );
}
