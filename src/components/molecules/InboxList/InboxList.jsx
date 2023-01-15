import { LoadingChatIcon } from "../../atoms/icons/LoadingChatIcon";
import { Searchbar } from "../../atoms/Searchbar/Searchbar";
import { InboxCard } from "../InboxCard/InboxCard";

export const InboxList = ({ inboxData, onClick, loading }) => {
  return (
    <div className="container pt-[24px]">
      <Searchbar />
      <div className="container w-full px-[32px]">
        {!loading ? (
          <div className="flex flex-col overflow-auto divide-y h-[400px]">
            {inboxData &&
              inboxData.map((item, index) => {
                return <InboxCard key={index} groupName={item.groupName} date={item.date} user={item.user} message={item.message} isRead={item.isRead} participant={item.participant} onClick={() => onClick(JSON.stringify(item))} />;
              })}
          </div>
        ) : (
          <div className="w-full h-full absolute m-auto text-center top-[12rem]">
            <LoadingChatIcon className="animate-spin m-auto" width={60} height={60} />
            <h5 className="text-xs">Loading Chats...</h5>
          </div>
        )}
      </div>
    </div>
  );
};
