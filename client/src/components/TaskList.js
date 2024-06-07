import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../services/taskService';
import TaskItem from './TaskItem';

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

return (
        <div>
                {tasks.map((task) => (
                <TaskItem
                key={task._id}
                task={task}
                onDelete={handleDelete}
                onToggleComplete={handleToggleComplete}
                />
            ))}
        </div>
    );
};

export default TaskList;
