import PropTypes from "prop-types";

export const Dropdown = ({ options }) => {
  return (
    <select className="border-[#828282] border rounded-md w-[150px] text-sm px-2" placeholder="My Tasks">
      <option value="My Tasks" disabled selected hidden className="font-xs">
        My Tasks
      </option>
      {options &&
        options.map((item, index) => {
          return (
            <option className="px-5" value={item.value} key={index}>
              {item.label}
            </option>
          );
        })}
    </select>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
};

Dropdown.defaultProps = {
  options: [
    { label: "Personal Errands", value: 1 },
    { label: "Urgent To-Do", value: 2 },
  ],
};
