import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTaskPage = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState('');
    const [status, setStatus] = useState('Pending');
    const navigate = useNavigate();

    const handleAddTask = () => {
        if (newTask.trim() === '') return;

        const task = {
            id: Date.now(),
            text: newTask,
            status: status,
        };

        onAddTask(task);

       navigate('/');
    };

  return (
    <div>
        <h1>Add New Task</h1>
        <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Task description'    
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default AddTaskPage