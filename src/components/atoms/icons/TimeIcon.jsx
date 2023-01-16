import { number, string } from "prop-types";

export const TimeIcon = ({ width, height, className, fillColor }) => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99187 0.666672C4.39187 0.666672 0.66687 4.40001 0.66687 9.00001C0.66687 13.6 4.39187 17.3333 8.99187 17.3333C13.6002 17.3333 17.3335 13.6 17.3335 9.00001C17.3335 4.40001 13.6002 0.666672 8.99187 0.666672ZM9.00037 15.6667C5.31703 15.6667 2.3337 12.6833 2.3337 9C2.3337 5.31667 5.31703 2.33334 9.00037 2.33334C12.6837 2.33334 15.667 5.31667 15.667 9C15.667 12.6833 12.6837 15.6667 9.00037 15.6667ZM8.16687 4.83334H9.41687V9.20834L13.1669 11.4333L12.5419 12.4583L8.16687 9.83334V4.83334Z"
        fill={fillColor}
      />
    </svg>
  );
};

TimeIcon.propTypes = {
  width: number,
  height: number,
  className: string,
  fillColor: string,
};
