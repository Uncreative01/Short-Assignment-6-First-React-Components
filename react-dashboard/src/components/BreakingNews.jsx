import "./Card.css";

export default function BreakingNews({ headline, summary }) {
  return (
    <div className="card news-card">
      <h2>📰 Breaking News</h2>
      <h3>{headline}</h3>
      <p>{summary}</p>
      <button className="read-more">Read More</button>
    </div>
  );
}