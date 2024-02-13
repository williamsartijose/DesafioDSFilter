import "./styles.css";

export default function CardFilter() {
  return (
    <div className="dsf-cardFilter-container">
      <div className="dsf-input-content">
        <input type="text" placeholder="Preço mínimo" />
      </div>

      <div className="dsf-input-content">
        <input type="text" placeholder="Preço máximo" />
      </div>
      <button>Filtrar</button>
    </div>
  );
}