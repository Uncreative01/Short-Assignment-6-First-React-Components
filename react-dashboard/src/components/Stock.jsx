import "./Card.css";

export default function Stock({ company, price, change }) {
  const isPositive = change >= 0;

  return (
    <div className="card stock-card">
      <h2>📈 Stock</h2>
      <h3>{company}</h3>
      <p className="price">${price}</p>
      <p className={isPositive ? "positive" : "negative"}>
        {isPositive ? "+" : ""}
        {change}%
      </p>
    </div>
  );
}