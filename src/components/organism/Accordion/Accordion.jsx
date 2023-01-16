import { AccordionItem } from "../../molecules/AccordionItem/AccordionItem";

export const Accordion = ({ dataSource }) => {
  return (
    <div className="w-full h-[420px] px-[32px] overflow-auto">
      {dataSource &&
        dataSource.map((item, index) => {
          return <AccordionItem key={index} isDone={item.isDone} taskName={item.taskName} deadline={item.deadline} date={item.date} description={item.description} />;
        })}
    </div>
  );
};
