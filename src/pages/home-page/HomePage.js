import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ tasks, onDeleteTask, onEditTask }) => {
    const handleCopyTasks = () => {
        const taskText = tasks.map(task => `${task.text} - ${task.status}`).join('\n');

        navigator.clipboard.writeText(taskText)
        .then(() => {
            alert('Tasks copied to clipboard!');
        })
        .catch((err) => {
            console.error('Failed to copy tasks:', err);
        });
    };
    
    return (
        <div className='container'>
            <div className='row1'>
                <h1>To Do List</h1>
                <button onClick={handleCopyTasks}>Copy All Tasks</button>
            </div>
            
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Link to={`/task/${task.id}`}>
                            {task.text} - {task.status}
                        </Link>

                        <select 
                            value={task.status} 
                            onChange={(e) => onEditTask(task.id, e.target.value)}
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>

                        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;