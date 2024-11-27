import React from 'react';

const ComboItem = ({ combo, handleAddCombo, handleAddMoreCombo }) => {
  return (
    <div className="combo-item">
      <h3>{combo.name} - ${combo.price}</h3>
      <button onClick={() => handleAddCombo(combo)}>Agregar</button>
      <button onClick={() => handleAddMoreCombo(combo)}>Agregar más</button>
    </div>
  );
};

export default ComboItem;
