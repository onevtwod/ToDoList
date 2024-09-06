import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import AddTaskPage from './AddTaskPage';
import TaskDetailsPage from './TaskDetailsPage';
import Header from './header/Header';
import Footer from './footer/Footer';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Hello',
        status: 'Pending',
    },
    {
        id:2,
        text: 'Nice',
        status: 'In Progress'
    }
  ])  

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <div>
        <Header/>
      
        <Routes>
          <Route path="/" element={<HomePage tasks={tasks} onDeleteTask={deleteTask} onEditTask={editTask} />} />
          <Route path="/add-task" element={<AddTaskPage onAddTask={addTask} />} />
          <Route path="/task/:id" element={<TaskDetailsPage tasks={tasks} />} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
