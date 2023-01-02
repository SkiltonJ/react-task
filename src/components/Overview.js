import React from "react";

const Overview = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <ul style={{ listStyleType: 'none' }}>
      {tasks.map((task, index) => {
        return <li key={task.id}>{index + 1}. {task.text}<button onClick={(e) => deleteTask(e, index)}>Delete</button>
        </li>;
      })}
    </ul>
  );
};

export default Overview;
