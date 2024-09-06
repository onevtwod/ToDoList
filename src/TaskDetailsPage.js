import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

const TaskDetailsPage = ({ tasks }) => {
    const { id } = useParams();
    const task = tasks.find((task) => task.id === parseInt(id))

    if (!task) {
        return <div>Loading...</div>;
    }
  return (
    <div>
        <h1>Task Details</h1>
        <p><strong>Description:</strong> {task.text}</p>
        <p><strong>Status:</strong> {task.status}</p>
    </div>
  );
};

export default TaskDetailsPage