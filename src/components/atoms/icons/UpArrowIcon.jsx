import { number, string } from "prop-types";

export const UpArrowIcon = ({ width, height, className, onClick }) => {
  return (
    <svg onClick={onClick} width={width} height={height} className={className} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.175 7.08749L5 3.27083L8.825 7.08749L10 5.91249L5 0.912495L-1.02722e-07 5.91249L1.175 7.08749Z" fill="#4F4F4F" />
    </svg>
  );
};

UpArrowIcon.propTypes = {
  width: number,
  height: number,
  className: string,
};

UpArrowIcon.defaultProps = {
  width: 24,
  height: 24,
};
