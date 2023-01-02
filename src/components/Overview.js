import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul style={{ listStyleType: 'none' }}>
      {tasks.map((task, index) => {
        return <li key={task.id}>{index + 1}. {task.text}</li>;
      })}
    </ul>
  );
};

export default Overview;
