import moment from "moment";
import { useEffect, useState } from "react";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import { DateTime } from "../../atoms/DateTime/DateTime";
import { EditIcon } from "../../atoms/icons/EditIcon";
import { ThreeDotIcon } from "../../atoms/icons/ThreeDotIcon";
import { TimeIcon } from "../../atoms/icons/TimeIcon";
import { UpArrowIcon } from "../../atoms/icons/UpArrowIcon";

export const AccordionItem = ({ taskName, deadline, date, description, isDone, isEditing }) => {
  const [collapse, setCollapse] = useState(false);
  const [dateTimeValue, setDateTimeValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [taskNameValue, setTaskNameValue] = useState("");
  const [isDoneValue, setIsDoneValue] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (taskName !== "" && taskName !== null) {
      setTaskNameValue(taskName);
    }

    if (date !== "" && date !== null) {
      setDateTimeValue(moment(date).format("yyyy-MM-DD"));
    }

    if (description !== "" && description !== null) {
      setDescriptionValue(description);
    }

    setIsDoneValue(isDone);
  }, [taskName, deadline, date, description, isDone]);

  const onCheck = () => {
    setIsDoneValue(!isDoneValue);
  };

  const onChangeDateTime = (e) => {
    setDateTimeValue(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescriptionValue(e.target.value);
  };

  const onTaskNameValue = (e) => {
    setTaskNameValue(e.target.value);
  };

  return (
    <div className="py-3">
      <div className="flex flex-col">
        <div className="flex relative gap-3 cursor-pointer">
          <Checkbox value={isDoneValue} onChange={onCheck} />
          <div className="flex gap-2 w-full">
            <textarea
              type="text"
              style={{ resize: "none" }}
              className={`my-auto text-[11px] w-[13rem] ${isDoneValue ? "line-through text-[#828282]" : "font-semibold text-[#4f4f4f]"} placeholder:font-light placeholder:text-sm`}
              value={taskNameValue}
              onChange={onTaskNameValue}
              placeholder="Type task title"
            />
            <span className={`text-red-500 font-light text-[10px] ml-auto transition ${isDoneValue ? "opacity-0" : "opacity-1"}`} onClick={() => setCollapse(!collapse)}>
              {deadline}
            </span>
            <span className="font-light text-[10px] ml-auto" onClick={() => setCollapse(!collapse)}>
              {moment(dateTimeValue).format("DD/MM/YYYY")}
            </span>
            <UpArrowIcon width={14} height={14} fillColor="#4f4f4f" className={`transition ${collapse ? "rotate-180" : "rotate-0"}`} onClick={() => setCollapse(!collapse)} />
            <ThreeDotIcon width={14} height={14} fillColor="#828282" onClick={() => setOpenMenu(!openMenu)} />
          </div>
          <button type="button" className={`text-red-500 absolute right-1 top-[1rem] bg-[#fff] text-sm border rounded-md w-[80px] h-[35px] text-left pl-2 border-[#828282] font-light ${openMenu ? "visible" : "hidden"}`}>
            Delete
          </button>
        </div>
        <div className={`border-b border-[#828282] pb-3`}>
          <div className={`flex pl-6 py-2 ${collapse ? "hidden" : "visible"} transition`}>
            <TimeIcon width={15} height={15} fillColor={dateTimeValue === "" ? "#828282" : "#2F80ED"} className="my-auto mr-3" />
            <DateTime onChange={onChangeDateTime} value={dateTimeValue} />
          </div>
          <div className={`flex pl-6 py-2 ${collapse ? "hidden" : "visible"} transition`}>
            <EditIcon width={15} height={15} fillColor={descriptionValue === "" ? "#828282" : "#2F80ED"} className="my-auto mr-3" />
            <textarea placeholder="No Description" className="text-xs font-light w-[20rem]" value={descriptionValue} onChange={onChangeDescription}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
