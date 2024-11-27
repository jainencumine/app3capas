export const agregarCombo = (pedido, combo) => {
  const comboExistente = pedido.find((item) => item.id === combo.id);
  if (comboExistente) {
    return pedido.map((item) =>
      item.id === combo.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...pedido, { ...combo, quantity: 1 }];
};

export const confirmarPedido = (pedidosConfirmados, mesa, pedido) => {
  const total = pedido.reduce((total, combo) => total + combo.price * combo.quantity, 0);
  const nuevoPedido = { mesa, combos: pedido, total };
  return [...pedidosConfirmados, nuevoPedido];
};

