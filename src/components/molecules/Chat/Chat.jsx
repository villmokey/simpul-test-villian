import { SendMessageButton } from "../../atoms/Button/SendMessageButton";
import { BackArrowIcon } from "../../atoms/icons/BackArrowIcon";
import { CloseIcon } from "../../atoms/icons/CloseIcon";
import { InputMessage } from "../../atoms/InputMessage/InputMessage";
import { Message } from "../../atoms/Message/Message";

export const Chat = ({ onClick, messages }) => {
  console.log(JSON.parse(messages));
  const LineDate = () => {
    return (
      <div className="flex justify-center gap-2 pt-2">
        <div className="border-t border-[#4F4F4F] w-1/3 self-center"></div>
        <h5 className="text-[12px]">Today June 09, 2021</h5>
        <div className="border-t border-[#4F4F4F] w-1/3 self-center"></div>
      </div>
    );
  };

  return (
    <>
      <div className="flex w-full h-[50px] border-[#BDBDBD] border-b">
        <button type="button" onClick={onClick}>
          <BackArrowIcon className="my-auto ml-5" fillColor="#333333" width={16} height={16} />
        </button>
        <div className="block px-3 my-auto">
          <h5 className="text-[#2F80ED] text-xs font-semibold">I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</h5>
          <p className="text-[10px]">3 Participants</p>
        </div>
        <button type="button" className="my-auto ml-auto mr-5">
          <CloseIcon fillColor="#333333" width={14} height={14} />
        </button>
      </div>
      <div className="h-[400px] w-full overflow-auto">
        <LineDate />
        {messages &&
          JSON.parse(messages).messages.map((item, index) => {
            return <Message key={index} name={item.name} body={item.body} time={item.time} color={item.color} bgColor={item.bgColor} />;
          })}
      </div>
      <div className="w-full flex px-4 gap-3">
        <InputMessage />
        <SendMessageButton />
      </div>
    </>
  );
};
