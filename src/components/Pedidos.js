import React from "react";

const Pedidos = ({ pedidoActual, pedidosConfirmados, onEliminar, onConfirmar, mesa, setMesa }) => {
  const totalCurrentOrder = pedidoActual.reduce(
    (acc, combo) => acc + combo.price * combo.quantity,
    0
  );

  return (
    <div>
      
      <div className="section">
        <h2>Resumen del Pedido</h2>
        <input
          type="text"
          placeholder="Número de mesa"
          value={mesa}
          onChange={(e) => setMesa(e.target.value)}
        />
        {pedidoActual.map((combo, index) => (
          <div key={index}>
            <span>
              {combo.name} - ${combo.price} x {combo.quantity}
            </span>
            <button onClick={() => onEliminar(index)}>Eliminar</button>
          </div>
        ))}
        <h3>Total: ${totalCurrentOrder}</h3>
        <button
          onClick={onConfirmar}
          disabled={!mesa || pedidoActual.length === 0}
        >
          Confirmar Pedido
        </button>
      </div>

      
      <div className="orders-section">
        <h2>Pedidos Confirmados</h2>
        {pedidosConfirmados.map((order, index) => (
          <div key={index} className="order-item">
            <h3>Mesa: {order.mesa}</h3>
            <ul>
              {order.combos.map((combo, i) => (
                <li key={i}>
                  {combo.name} - ${combo.price} x {combo.quantity}
                </li>
              ))}
            </ul>
            <h4>Total: ${order.total}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pedidos;

