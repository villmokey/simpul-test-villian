import { useState } from "react";
import { epochToHour } from "../../../helpers/convert";
import { ThreeDotIcon } from "../icons/ThreeDotIcon";

export const Message = ({ name, body, time, color, bgColor }) => {
  const [optionsVis, setOptionsVis] = useState(false);

  const RenderMessage = (name) => {
    if (name === "me") {
      return (
        <div className="relative pr-4 py-1">
          <h5 className={`flex text-xs justify-end`} style={{ color: color }}>
            You
          </h5>
          <div className="flex justify-end">
            <div className="mr-2">
              <button type="button" className="mb-auto" onClick={() => setOptionsVis(!optionsVis)}>
                <ThreeDotIcon width={10} height={10} fillColor="#4F4F4F" />
              </button>
              <div className={`flex flex-col absolute rounded-lg divide-y divide-[#bdbdbd] border border-[#BDBDBD] bg-[#fff] w-[100px] ${optionsVis ? "visible" : "hidden"}`}>
                <button type="button" className="text-[#2F80ED] text-xs p-1">
                  Edit
                </button>
                <button type="button" className="text-[#EB5757] text-xs p-1">
                  Delete
                </button>
              </div>
            </div>
            <div className={`h-full w-[300px] rounded-[5px] text-xs`} style={{ backgroundColor: bgColor }}>
              <p className="text-[11px] font-light px-4 pt-4 p">{body}</p>
              <p className="text-[11px] font-light px-4 pt-2 py-2">{epochToHour(time)}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative pl-4 py-4">
          <h5 className={`text-xs`} style={{ color: color }}>
            {name}
          </h5>
          <div className="flex">
            <div className={`h-full w-[300px] rounded-[5px] text-xs`} style={{ backgroundColor: bgColor }}>
              <p className="text-[11px] font-light px-4 pt-4 p">{body}</p>
              <p className="text-[11px] font-light px-4 pt-2 py-2">{epochToHour(time)}</p>
            </div>
            <div className="ml-2">
              <button type="button" className="mb-auto" onClick={() => setOptionsVis(!optionsVis)}>
                <ThreeDotIcon width={10} height={10} fillColor="#4F4F4F" />
              </button>
              <div className={`flex flex-col absolute rounded-lg divide-y divide-[#bdbdbd] border border-[#BDBDBD] bg-[#fff] w-[100px] ${optionsVis ? "visible" : "hidden"}`}>
                <button type="button" className="text-[#2F80ED] text-xs p-1">
                  Edit
                </button>
                <button type="button" className="text-[#EB5757] text-xs p-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <>{RenderMessage(name)}</>;
};
