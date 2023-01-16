export const Checkbox = ({ onChange, value, defaultValue }) => {
  return <input type="checkbox" checked={value} className="w-[15px] h-[15px] border-[#828282] z-40 checked:bg-[#828282]" onChange={onChange} />;
};
