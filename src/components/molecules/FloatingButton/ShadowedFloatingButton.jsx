export const ShadowedFloatingButton = ({ icon, onClickFrontButton, onClickShadowButton, color, hoverColor, height }) => {
  return (
    <>
      <button className={`bg-[#4F4F4F] w-full h-${height} rounded-full absolute right-4`} onClick={onClickShadowButton} />
      <button className={`w-full h-${height} rounded-full z-40 hover:bg-[${hoverColor}]`} style={{ backgroundColor: color }} onClick={onClickFrontButton}>
        {icon}
      </button>
    </>
  );
};
