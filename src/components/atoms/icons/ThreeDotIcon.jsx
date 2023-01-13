import PropTypes from "prop-types";

export const ThreeDotIcon = ({ width, height, className, fillColor }) => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.00008 0.666664C1.26675 0.666664 0.666748 1.26666 0.666748 2C0.666748 2.73333 1.26675 3.33333 2.00008 3.33333C2.73341 3.33333 3.33342 2.73333 3.33342 2C3.33342 1.26666 2.73341 0.666664 2.00008 0.666664ZM10.0001 0.666664C9.26675 0.666664 8.66675 1.26666 8.66675 2C8.66675 2.73333 9.26675 3.33333 10.0001 3.33333C10.7334 3.33333 11.3334 2.73333 11.3334 2C11.3334 1.26666 10.7334 0.666664 10.0001 0.666664ZM4.66675 2C4.66675 1.26666 5.26675 0.666664 6.00008 0.666664C6.73341 0.666664 7.33341 1.26666 7.33341 2C7.33341 2.73333 6.73341 3.33333 6.00008 3.33333C5.26675 3.33333 4.66675 2.73333 4.66675 2Z"
        fill={fillColor}
      />
    </svg>
  );
};

ThreeDotIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  fillColor: PropTypes.string,
};

ThreeDotIcon.defaultProps = {
  width: 24,
  height: 24,
  fillColor: "#F8B76B",
};
