import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../services/taskService';
import TaskItem from './TaskItem';
import './TaskList.css'

const TaskList = () =>  {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await getTasks();
            setTasks(tasks);
        };
        fetchTasks();
    }, []);

    const handleDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter((task) => task._id !== id));
    };

    const handleToggleComplete = async (task) => {
        task.completed = !task.completed;
        await updateTask(task._id, task);
        setTasks(tasks.map((t) => (t._id === task._id ? task : t)));
    };

    const handleUpdate = async (id, task) => {
        const result = await updateTask(id, task);
        setTasks(tasks.map(task => (task._id === id ? result : task)));
    };

return (    
        <div className="task-list">
                {tasks.map((task) => (
                <TaskItem
                key={task._id}
                task={task}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
                onToggleComplete={handleToggleComplete}
                />
            ))}
        </div>
    );
};

export default TaskList;
