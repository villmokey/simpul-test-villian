import { UserIcon } from "../../atoms/icons/UserIcon";

export const InboxCard = ({ id, groupName, date, user, message, isRead, onClick, participant }) => {
  return (
    <div className="flex relative py-[22px] cursor-pointer hover:bg-[#E0E0E0]" onClick={onClick}>
      <div className="flex relative ml-4">
        {participant > 2 ? (
          <>
            <div className="rounded-full absolute bg-[#E0E0E0] w-[34px] h-[34px] right-4">
              <UserIcon width={12} height={12} className="m-auto mt-2" fillColor="#000033" />
            </div>
            <div className="rounded-full bg-[#2F80ED] w-[34px] h-[34px] z-40">
              <UserIcon width={12} height={12} className="m-auto mt-2" fillColor="#fff" />
            </div>
          </>
        ) : (
          <div className="rounded-full bg-[#2F80ED] w-[34px] h-[34px] z-40 text-center">
            <h5 className="text-white uppercase mt-1"> {user[0]}</h5>
          </div>
        )}
      </div>
      <div className="pl-4">
        <input type="hidden" value={id} />
        <div className="flex gap-2">
          <h5 className="text-[#2F80ED] text-[11px] font-semibold">{groupName}</h5>
          <span className="text-[11px]">{date}</span>
        </div>
        {participant > 2 && <p className="text-[12px]">{user} : </p>}
        <p className="font-light text-[12px] w-60">{message}</p>
        {!isRead && <div className="rounded-full bg-[#EB5757] h-[10px] w-[10px] absolute right-[12px] top-[3rem]"></div>}
      </div>
    </div>
  );
};
