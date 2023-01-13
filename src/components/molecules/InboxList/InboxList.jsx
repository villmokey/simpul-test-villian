import { Searchbar } from "../../atoms/Searchbar/Searchbar";
import { InboxCard } from "../InboxCard/InboxCard";

export const InboxList = ({ inboxData, onClick }) => {
  return (
    <div className="container px-8 pt-[24px]">
      <Searchbar />
      <div className="container w-full">
        <div className="flex flex-col overflow-auto divide-y h-[400px]">
          {inboxData &&
            inboxData.map((item, index) => {
              return <InboxCard key={index} groupName={item.groupName} date={item.date} user={item.user} message={item.message} isRead={item.isRead} onClick={() => onClick(JSON.stringify(item))} />;
            })}
        </div>
      </div>
    </div>
  );
};
