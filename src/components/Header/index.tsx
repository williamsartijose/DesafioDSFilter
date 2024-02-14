import { useContext } from "react";
import { ContextProductCount } from "../../utils/context-product";
import "./styles.css";

export default function Header() {

  const {contextProductCount} = useContext(ContextProductCount);

  return (
    <header>
      <nav className="dsf-container">
        <h1>DSFilter</h1>
        <p>{contextProductCount} produtos(s)</p>
      </nav>
    </header>
  );
}