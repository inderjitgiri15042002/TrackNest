import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div
      id="tasklist"
      className="w-full overflow-x-auto bg-gray-900"
      style={{ marginTop: "2.5rem", padding: "1.5rem 1rem" }}
    >
      <div
        className="flex gap-4 justify-evenly flex-nowrap h-[300px]"
        style={{ height: "auto" }}
      >
        {data?.tasks?.map((ele, index) => {
          if (ele.active) {
            return <AcceptTask key={index} data={ele} />;
          }
          if (ele.completed) {
            return <CompleteTask key={index} data={ele} />;
          }
          if (ele.new) {
            return <NewTask key={index} data={ele} />;
          }
          if (ele.failed) {
            return <FailedTask key={index} data={ele} />;
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default TaskList;
