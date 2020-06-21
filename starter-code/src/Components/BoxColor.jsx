import React from "react";

function BoxColor({ r, g, b }) {
  const toHex = (n) => n.toString(16).padStart(2, 0);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  const color = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";

  return (
    <div className="idcard" style={{ backgroundColor: hex, color }}>
      {rgb} {hex}
    </div>
  );
}

export default BoxColor;
