export const FloatingButton = ({ icon, color, onClick, hoverColor, height }) => {
  return (
    <button className={`w-full h-${height} rounded-full hover:bg-[#2a73d5]`} style={{ backgroundColor: color }} onClick={onClick}>
      {icon}
    </button>
  );
};
