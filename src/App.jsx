import { useEffect, useState } from "react";
import { InboxIcon } from "./components/atoms/icons/InboxIcon";
import { QuickIcon } from "./components/atoms/icons/QuickIcon";
import { TaskIcon } from "./components/atoms/icons/TaskIcon";
import { FloatingButton } from "./components/molecules/FloatingButton/FloatingButton";
import { ShadowedFloatingButton } from "./components/molecules/FloatingButton/ShadowedFloatingButton";
import { PopupInbox } from "./components/organism/Popup/PopupInbox";
import { PopupTask } from "./components/organism/Popup/PopupTask";

// 1673568000
// 1673654400
// 86400

let inboxData = [
  {
    id: 1,
    groupName: "109920-Naturalization",
    date: "02/06/2021 10:45",
    user: "Cameron Philips",
    message: "Please check this out",
    isRead: false,
    participant: 3,
    messages: [
      {
        chatID: 1,
        inboxID: 1,
        name: "me",
        body: "No worries. It will be completed ASAP. I’ve asked him yesterday",
        chatTime: 1673654400,
        color: "#9B51E0",
        bgColor: "#EEDCFF",
        isRead: true,
      },
      {
        chatID: 2,
        inboxID: 1,
        name: "Mary Hilda",
        body: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks",
        chatTime: 1673654400,
        color: "#E5A443",
        bgColor: "#FCEED3",
        isRead: true,
      },
      {
        chatID: 3,
        inboxID: 1,
        name: "me",
        body: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
        chatTime: 1673740800,
        color: "#9B51E0",
        bgColor: "#EEDCFF",
        isRead: true,
      },
      {
        chatID: 4,
        inboxID: 1,
        name: "Mary Hilda",
        body: "Sure thing, Claren",
        chatTime: 1673740800,
        color: "#E5A443",
        bgColor: "#FCEED3",
      },
      {
        chatID: 5,
        inboxID: 1,
        name: "Obaidullah Amarkhil",
        body: "Morning. I’ll try to do them. Thanks",
        chatTime: 1673740800,
        color: "#43B78D",
        bgColor: "#D2F2EA",
      },
    ],
  },
  {
    id: 2,
    groupName: "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
    date: "02/06/2021 10:45",
    user: "Ellens",
    message: "Hey, Please read",
    isRead: true,
    participant: 3,
    messages: [
      {
        chatID: 1,
        inboxID: 1,
        name: "me",
        body: "No worries. It will be completed ASAP. I’ve asked him yesterday",
        chatTime: 1673654400,
        color: "#9B51E0",
        bgColor: "#EEDCFF",
        isRead: true,
      },
      {
        chatID: 2,
        inboxID: 1,
        name: "Mary Hilda",
        body: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks",
        chatTime: 1673654400,
        color: "#E5A443",
        bgColor: "#FCEED3",
        isRead: true,
      },
      {
        chatID: 3,
        inboxID: 1,
        name: "me",
        body: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
        chatTime: 1673654400,
        color: "#9B51E0",
        bgColor: "#EEDCFF",
        isRead: true,
      },
      {
        chatID: 4,
        inboxID: 1,
        name: "Mary Hilda",
        body: "Sure thing, Claren",
        chatTime: 1673654400,
        color: "#E5A443",
        bgColor: "#FCEED3",
      },
      {
        chatID: 5,
        inboxID: 1,
        name: "Obaidullah Amarkhil",
        body: "Morning. I’ll try to do them. Thanks",
        chatTime: 1673740800,
        color: "#43B78D",
        bgColor: "#D2F2EA",
      },
    ],
  },
  {
    id: 3,
    groupName: "8045-Diana SALAZAR MUNGUIA",
    date: "01/06/2021 12:19",
    user: "Cameron Philips",
    message: "I understand your initial concerns and that very valid, Elizabeth. But you...",
    isRead: true,
    participant: 3,
    messages: [
      {
        chatID: 1,
        inboxID: 1,
        name: "me",
        body: "No worries. It will be completed ASAP. I’ve asked him yesterday",
        chatTime: 1673654400,
        color: "#9B51E0",
        bgColor: "#EEDCFF",
        isRead: true,
      },
      {
        chatID: 2,
        inboxID: 1,
        name: "Mary Hilda",
        body: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks",
        chatTime: 1673654400,
        color: "#E5A443",
        bgColor: "#FCEED3",
        isRead: true,
      },
      {
        chatID: 3,
        inboxID: 1,
        name: "me",
        body: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
        chatTime: 1673740800,
        color: "#9B51E0",
        bgColor: "#EEDCFF",
        isRead: true,
      },
      {
        chatID: 4,
        inboxID: 1,
        name: "Mary Hilda",
        body: "Sure thing, Claren",
        chatTime: 1673740800,
        color: "#E5A443",
        bgColor: "#FCEED3",
      },
      {
        chatID: 5,
        inboxID: 1,
        name: "Obaidullah Amarkhil",
        body: "Morning. I’ll try to do them. Thanks",
        chatTime: 1673740800,
        color: "#43B78D",
        bgColor: "#D2F2EA",
      },
    ],
  },
  {
    id: 4,
    groupName: "FastVisa Support",
    date: "01/06/2021 12:19",
    user: "FastVisa Support",
    message: "Hey there! Welcome to your inbox",
    isRead: true,
    participant: 2,
    messages: [
      {
        chatID: 1,
        inboxID: 4,
        name: "FastVisa Support",
        body: "Hey there. Welcome to your inbox! Contact us for more information and help about anything! We’ll send you a response as soon as possible.",
        chatTime: 1673510400,
        color: "#2F80ED",
        bgColor: "#F8F8F8",
        isRead: true,
      },
      {
        chatID: 2,
        inboxID: 4,
        name: "me",
        body: "Hi, I need help with something can you help me ?",
        chatTime: 1673568000,
        color: "#9B51E0",
        bgColor: "#EEDCFF",
        isRead: true,
      },
    ],
  },
];

let taskData = [
  {
    taskID: 1,
    taskName: "Close off Case #012920- RODRIGUES, Amiguel",
    date: "01/10/2021",
    deadline: "2 Days left",
    description: "",
    isDone: false,
  },
  {
    taskID: 2,
    taskName: "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203 ",
    date: "02/10/2021",
    deadline: "4 Days left",
    description: "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
    isDone: false,
  },
  {
    taskID: 3,
    taskName: "Set up appointment with Dr Blake",
    date: "01/06/2021",
    deadline: "10 Days left",
    description: "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
    isDone: false,
  },
  {
    taskID: 4,
    taskName: "Contact Mr Caleb - video conference?",
    date: "03/06/2021",
    deadline: "4 Days left",
    description: "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
    isDone: true,
  },
  {
    taskID: 5,
    taskName: "Assign 3 homework to Client A",
    date: "02/06/2021",
    deadline: "10 Days left",
    description: "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
    isDone: true,
  },
];

function App() {
  const [quickIsOpen, setQuickIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState("");
  const [inboxVis, setInboxVis] = useState(false);
  const [taskVis, setTaskVis] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [taskDataSource, setTaskDataSource] = useState(taskData);

  const openQuicksMenu = () => {
    setQuickIsOpen(!quickIsOpen);
  };

  const openMenu = (menu) => {
    setMenuIsOpen(menu);
    if (menu === "inbox") {
      setInboxVis(true);
      setTaskVis(false);
      setTimeout(() => setIsLoading(false), [1000]);
    } else {
      setTaskVis(true);
      setInboxVis(false);
      setTimeout(() => setIsLoading(false), [1000]);
    }
  };

  const closeMenu = () => {
    setMenuIsOpen("");
    setQuickIsOpen(true);
    setInboxVis(false);
    setTaskVis(false);
    setTimeout(() => {
      setQuickIsOpen(false);
    }, 300);
  };

  const addTask = () => {
    let lastId = taskData[taskData.length - 1].taskID;
    setTaskDataSource((prev) => [...prev, { taskID: lastId + 1, taskName: "", date: "", deadline: "", description: "", isDone: false }]);
  };

  return (
    <div className="flex">
      <div className="w-1/4 min-h-screen max-h-full bg-[#333333] border-r border-[#f2f2f2]"></div>
      <div className="w-full bg-[#333333]">
        <div className="h-[58px] bg-[#4F4F4F] w-full flex items-center">
          <div className="ml-4">
            <svg width="24" height="24" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.1856 18.9783H22.5486L31.1579 27.6047L28.5872 30.1754L19.9607 21.5662V20.2032L19.4949 19.7201C17.528 21.4109 14.9746 22.4289 12.1968 22.4289C6.00304 22.4289 0.982422 17.4082 0.982422 11.2144C0.982422 5.02061 6.00304 0 12.1968 0C18.3907 0 23.4113 5.02061 23.4113 11.2144C23.4113 13.9922 22.3934 16.5456 20.7026 18.5124L21.1856 18.9783ZM4.433 11.2145C4.433 15.5104 7.90084 18.9783 12.1968 18.9783C16.4928 18.9783 19.9607 15.5104 19.9607 11.2145C19.9607 6.91846 16.4928 3.45062 12.1968 3.45062C7.90084 3.45062 4.433 6.91846 4.433 11.2145Z"
                fill="#F2F2F2"
              />
            </svg>
          </div>
        </div>
        <div className="container">
          <div className="fixed right-10 bottom-[8rem]">
            <PopupInbox inboxData={inboxData} visibility={inboxVis} loading={isLoading} />
            <PopupTask visibility={taskVis} dataSource={taskDataSource} loading={isLoading} addTask={addTask} />
          </div>
          <div
            className={`
            fixed w-[60px] 
            right-10 
            flex 
            flex-col 
            ease-in-out 
            duration-300 
            transition ${quickIsOpen ? "-translate-x-[10.5rem] delay-75 h-[100] bottom-11" : "h-[60px] bottom-11"} ${menuIsOpen === "task" ? "translate-x-1" : menuIsOpen === "inbox" ? "-translate-x-[5.4rem]" : ""}`}
          >
            {menuIsOpen === "task" ? (
              <ShadowedFloatingButton height="[60px]" color="#8785FF" icon={<TaskIcon width={24} height={24} className="mx-auto" fillColor="#fff" />} onClickShadowButton={closeMenu} />
            ) : (
              <>
                <span className={`mx-auto text-white ${!quickIsOpen ? "hidden" : ""}`}>Task</span>
                <FloatingButton height="[60px]" hoverColor="#d9d9d9" color="#F2F2F2" icon={<TaskIcon width={24} height={24} className="m-auto" />} onClick={() => openMenu("task")} />
              </>
            )}
          </div>
          <div
            className={`fixed w-[60px] right-10 flex flex-col ease-in-out duration-300 transition ${quickIsOpen ? "-translate-x-[5.4rem] h-[100] bottom-11" : "delay-75 h-[60px] bottom-11"} ${
              menuIsOpen === "inbox" ? "translate-x-2" : menuIsOpen === "task" ? "-translate-x-[5.4rem]" : ""
            }`}
          >
            {menuIsOpen === "inbox" ? (
              <ShadowedFloatingButton height="[60px]" color="#F8B76B" icon={<InboxIcon width={24} height={24} className="m-auto" fillColor="#fff" />} onClickShadowButton={closeMenu} />
            ) : (
              <>
                <span className={`mx-auto text-white ${!quickIsOpen ? "hidden" : ""}`}>Inbox</span>
                <FloatingButton height="[60px]" hoverColor="#d9d9d9" color="#F2F2F2" icon={<InboxIcon width={24} height={24} className="m-auto" />} onClick={() => openMenu("inbox")} />
              </>
            )}
          </div>
          <div className={`fixed h-[68px] w-[68px] bottom-10 rounded-full right-10 flex transition ${menuIsOpen !== "" ? "hidden" : "visible"}`}>
            <FloatingButton height="full" hoverColor="#2a73d5" color="#2F80ED" icon={<QuickIcon width={24} height={24} className="mx-auto" />} onClick={openQuicksMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
