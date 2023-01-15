import { useEffect, useState } from "react";
import { LoadingChatIcon } from "../../atoms/icons/LoadingChatIcon";
import { Chat } from "../../molecules/Chat/Chat";
import { InboxList } from "../../molecules/InboxList/InboxList";

export const PopupInbox = ({ inboxData, visibility, loading }) => {
  const [chatData, setChatData] = useState(null);

  const onOpenChat = (chat) => {
    setChatData(chat);
  };

  return (
    <div className={`w-[500px] h-[500px] bg-[#fff] rounded-md rounded-br-none ${visibility ? "visible" : "hidden"}`}>
      {!chatData ? <InboxList inboxData={inboxData} onClick={onOpenChat} loading={loading} /> : <Chat onClick={() => onOpenChat(null)} messages={chatData} />}
    </div>
  );
};
