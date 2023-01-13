import { useState } from "react";
import { Chat } from "../../molecules/Chat/Chat";
import { InboxList } from "../../molecules/InboxList/InboxList";

export const PopupInbox = ({ inboxData }) => {
  const [chatData, setChatData] = useState(null);

  const onOpenChat = (chat) => {
    setChatData(chat);
  };

  return <div className="w-[500px] h-[500px] bg-[#fff] rounded-md rounded-br-none">{!chatData ? <InboxList inboxData={inboxData} onClick={onOpenChat} /> : <Chat onClick={() => onOpenChat(null)} messages={chatData} />}</div>;
};
