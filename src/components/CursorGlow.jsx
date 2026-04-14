function CursorGlow({ cursor }) {
  return (
    <div
      className="cursor-glow"
      style={{ "--cursor-x": `${cursor.x}px`, "--cursor-y": `${cursor.y}px` }}
    />
  );
}

export default CursorGlow;
