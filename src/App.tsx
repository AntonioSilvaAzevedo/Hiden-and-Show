import { useState } from "react";
import "./App.css";

export default function App() {
  const [showMoney, setShowmoney] = useState(true);
  const hideAndShowMoney = () => setShowmoney((prevState) => !prevState);

  return (
    <div className="App">
      {showMoney && <h1>10.000</h1>}
      {!showMoney && <h1>******</h1>}
      <div className="card">
        <button onClick={hideAndShowMoney}>Mostrar/Ocultar</button>
      </div>
    </div>
  );
}
