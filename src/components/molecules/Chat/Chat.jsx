import { data } from "autoprefixer";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { SendMessageButton } from "../../atoms/Button/SendMessageButton";
import { BackArrowIcon } from "../../atoms/icons/BackArrowIcon";
import { CloseIcon } from "../../atoms/icons/CloseIcon";
import { LoadingChatIcon } from "../../atoms/icons/LoadingChatIcon";
import { InputMessage } from "../../atoms/InputMessage/InputMessage";
import { Message } from "../../atoms/Message/Message";

export const Chat = ({ onClick, messages }) => {
  const [todayMessageID, setTodayMessageID] = useState(null);
  const [visNewMessageButton, setVisNewMessageButton] = useState(true);

  const chatContainerRef = useRef();

  const LineDate = ({ todayDate }) => {
    let convertDate = moment(todayDate * 1000).format("LL");
    return (
      <div className="flex justify-center gap-2 pt-2 px-5">
        <div className="border-t border-[#4F4F4F] w-full self-center"></div>
        <h5 className="text-[12px] w-full">Today {convertDate}</h5>
        <div className="border-t border-[#4F4F4F] w-full self-center"></div>
      </div>
    );
  };

  const NewMessageLine = () => {
    return (
      <div className="flex justify-center gap-2 pt-2 px-5">
        <div className="border-t border-[#EB5757] w-full self-center"></div>
        <h5 className="text-[12px] text-[#EB5757] w-[200px]">New Message</h5>
        <div className="border-t border-[#EB5757] w-full self-center"></div>
      </div>
    );
  };

  useEffect(() => {
    let lineDataMessageID = null;
    let message = JSON.parse(messages).messages;
    for (let i = 0; i < message.length; i++) {
      if (message[i + 1]) {
        let checkDay = new Date(message[i].chatTime * 1000).getDate();
        let checkDayNextIndex = new Date(message[i + 1].chatTime * 1000).getDate();
        if (checkDayNextIndex > checkDay) {
          lineDataMessageID = message[i + 1].chatID;
        }
      }
    }
    setTodayMessageID(lineDataMessageID);
  }, [messages]);

  const onScrollNewMessage = () => {
    chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
    setVisNewMessageButton(false);
  };

  return (
    <>
      <div className="flex w-full h-[50px] border-[#BDBDBD] border-b">
        <button type="button" onClick={onClick}>
          <BackArrowIcon className="my-auto ml-5" fillColor="#333333" width={16} height={16} />
        </button>
        <div className="block px-3 my-auto">
          <h5 className="text-[#2F80ED] text-xs font-semibold">{JSON.parse(messages).groupName}</h5>
          <p className="text-[10px]">{JSON.parse(messages).participant > 2 ? JSON.parse(messages).participant + " Participant" : ""}</p>
        </div>
        <button type="button" className="my-auto ml-auto mr-5">
          <CloseIcon fillColor="#333333" width={14} height={14} />
        </button>
      </div>
      <div className="h-[400px] w-full overflow-auto">
        {messages &&
          JSON.parse(messages).messages.map((item, index) => {
            return item.chatID === todayMessageID ? (
              <div key={index}>
                <LineDate todayDate={item.chatTime} />
                {JSON.parse(messages).messages.length - 1 === index && <NewMessageLine />}
                <Message name={item.name} body={item.body} time={item.chatTime} color={item.color} bgColor={item.bgColor} />
              </div>
            ) : (
              <div key={index}>
                {JSON.parse(messages).messages.length - 1 === index && <NewMessageLine />}
                <Message key={index} name={item.name} body={item.body} time={item.chatTime} color={item.color} bgColor={item.bgColor} />
              </div>
            );
          })}
        <div ref={chatContainerRef}></div>
      </div>
      {JSON.parse(messages).participant > 2 ? (
        <div className={`relative flex justify-center ${visNewMessageButton ? "visible" : "hidden"}`}>
          <button type="button" className="bg-[#E9F3FF] text-[#2F80ED] w-[7rem] absolute bottom-[10px] mx-auto text-xs py-1 rounded-md" onClick={onScrollNewMessage}>
            New Message
          </button>
        </div>
      ) : (
        <div className="absolute w-full px-4 bottom-[4rem]">
          <div className="w-full flex p-2 bg-[#E9F3FF] rounded-sm">
            <LoadingChatIcon width={18} height={18} fillColor="#2F80ED" className="animate-spin " />
            <p className="text-xs px-2">Please wait while we connect you with one of our team ...</p>
          </div>
        </div>
      )}
      <div className="w-full flex px-4 gap-3 relative">
        <InputMessage />
        <SendMessageButton />
      </div>
    </>
  );
};
