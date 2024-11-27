import React, { useState } from "react";
import ComboList from "./components/ComboList";
import Pedidos from "./components/Pedidos";
import combosDisponibles from "./data/combos";
import { agregarCombo, confirmarPedido } from "./services/pedidoService";
import "./App.css";

const App = () => {
  const [pedidoActual, setPedidoActual] = useState([]);
  const [pedidosConfirmados, setPedidosConfirmados] = useState([]);
  const [mesa, setMesa] = useState(""); 

  
  const handleAddCombo = (combo) => {
    setPedidoActual(agregarCombo(pedidoActual, combo));
  };

  
  const handleAddMoreCombo = (combo) => {
    setPedidoActual(agregarCombo(pedidoActual, combo));
  };

  
  const handleEliminar = (index) => {
    const nuevoPedido = [...pedidoActual];
    nuevoPedido.splice(index, 1);
    setPedidoActual(nuevoPedido);
  };

  
  const handleConfirmar = () => {
    if (mesa.trim() !== "" && pedidoActual.length > 0) {
      const nuevosPedidosConfirmados = confirmarPedido(pedidosConfirmados, mesa, pedidoActual);
      setPedidosConfirmados(nuevosPedidosConfirmados);
      setPedidoActual([]); 
      setMesa(""); 
    } else {
      alert("Debe ingresar un número de mesa y tener items en el pedido");
    }
  };

  return (
    <div className="App">
      <h1>APP MOZO EXPRESS</h1>
      
      <ComboList
        combos={combosDisponibles}
        handleAddCombo={handleAddCombo}
        handleAddMoreCombo={handleAddMoreCombo}
      />
      <Pedidos
        pedidoActual={pedidoActual}
        pedidosConfirmados={pedidosConfirmados}
        onEliminar={handleEliminar}
        onConfirmar={handleConfirmar}
        mesa={mesa}
        setMesa={setMesa}
      />
    </div>
  );
};

export default App;
