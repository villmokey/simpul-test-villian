import { ThreeDotIcon } from "../icons/ThreeDotIcon";

export const Message = ({ name, body, time, color, bgColor }) => {
  const RenderMessage = (name) => {
    if (name === "me") {
      return (
        <div className="relative pr-4 py-1">
          <h5 className={`text-[${color}] flex text-xs justify-end`}>You</h5>
          <div className="flex justify-end">
            <button type="button" className="mr-2 mb-auto">
              <ThreeDotIcon width={10} height={10} fillColor="#4F4F4F" />
            </button>
            <div className={`h-full w-[300px] rounded-[5px] text-xs`} style={{ backgroundColor: bgColor }}>
              <p className="text-[11px] font-light px-4 pt-4 p">{body}</p>
              <p className="text-[11px] font-light px-4 pt-2 py-2">{time}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative pl-4 py-4">
          <h5 className={`text-[${color}] text-xs`}>{name}</h5>
          <div className="flex">
            <div className={`h-full w-[300px] rounded-[5px] text-xs`} style={{ backgroundColor: bgColor }}>
              <p className="text-[11px] font-light px-4 pt-4 p">{body}</p>
              <p className="text-[11px] font-light px-4 pt-2 py-2">{time}</p>
            </div>
            <button type="button" className="ml-2 mb-auto">
              <ThreeDotIcon width={10} height={10} fillColor="#4F4F4F" />
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {/* <div className="flex justify-center gap-2 pt-2">
        <div className="border-t border-[#4F4F4F] w-1/3 self-center"></div>
        <h5 className="text-[12px]">Today June 09, 2021</h5>
        <div className="border-t border-[#4F4F4F] w-1/3 self-center"></div>
      </div> */}
      {RenderMessage(name)}
    </>
  );
};
