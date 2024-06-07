import React from 'react';

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => onToggleComplete(task)}
      >
        {task.title}
      </span>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
