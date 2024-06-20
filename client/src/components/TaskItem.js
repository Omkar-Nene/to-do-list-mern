import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onDelete, onUpdate, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleUpdate = () => {
    onUpdate(task._id, { ...task, title: updatedTitle });
    setIsEditing(false);
  };

  return (
    <div className='task-item'>
      {isEditing ? (
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
      ) : (
        <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      )}
      <button onClick={() => onDelete(task._id)}>Delete</button>
      {isEditing ? (
        <button onClick={handleUpdate}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={() => onToggleComplete(task)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default TaskItem;
