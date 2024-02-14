import { useState } from "react";
import "./styles.css";

type FomData = {
  min?: number;
  max?: number;
};

export default function CardFilter() {
  const [formData, setFormData] = useState<FomData>({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event : any) {
    event.preventDefault();
    console.log(formData.min || 0);
    console.log(formData.max || Number.MAX_VALUE);
    
    
  }

  return (
    <form>
      <div className="dsf-cardFilter-container">
        <div className="dsf-input-content">
          <input
            name="min"
            value={formData.min || ""}
            type="text"
            placeholder="Preço mínimo"
            onChange={handleInputChange}
          />
        </div>

        <div className="dsf-input-content">
          <input
            name="max"
            value={formData.max || ""}
            type="text"
            placeholder="Preço máximo"
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleSubmit} type="submit" >Filtrar</button>
      </div>
    </form>
  );
}