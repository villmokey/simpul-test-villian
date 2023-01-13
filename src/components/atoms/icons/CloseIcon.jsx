import PropTypes from "prop-types";

export const CloseIcon = ({ width, height, className, fillColor }) => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill={fillColor} />
    </svg>
  );
};

CloseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  fillColor: PropTypes.string,
};

CloseIcon.defaultProps = {
  width: 24,
  height: 24,
  fillColor: "#8885FF",
};
