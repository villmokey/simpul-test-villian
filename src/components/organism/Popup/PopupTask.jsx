import { Dropdown } from "../../atoms/Dropdown/Dropdown";
import { LoadingChatIcon } from "../../atoms/icons/LoadingChatIcon";
import { Accordion } from "../Accordion/Accordion";

export const PopupTask = ({ visibility, dataSource, loading, addTask }) => {
  return (
    <div className={`w-[500px] h-[550px] bg-[#fff] rounded-md rounded-br-none ${!visibility ? "hidden" : ""}`}>
      <div className="container">
        <div className="w-full flex pt-[24px] pb-[22px] px-[32px]">
          <Dropdown />
          <button type="button" onClick={addTask} className="px-3 text-sm text-white bg-[#2F80ED] ml-auto rounded-md h-[35px]">
            New Task
          </button>
        </div>
        <div className="w-full overflow-auto">
          {!loading ? (
            <Accordion dataSource={dataSource} />
          ) : (
            <div className="w-full h-full absolute m-auto text-center top-[12rem]">
              <LoadingChatIcon className="animate-spin m-auto" width={60} height={60} />
              <h5 className="text-xs">Loading Task List...</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
