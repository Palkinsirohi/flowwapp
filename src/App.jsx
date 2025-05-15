import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfileCard from './components/ProfileCard';
import TaskList from './components/TaskList';
import Statistics from './components/Statistics';
import Navbar from './components/Navbar';
import Login1 from './components/Login1';
import Signup from './components/Signup';
import './index.css';
import './App.css';

const initialTasks = [
  { id: 1, title: 'Complete frontend assignment', completed: false },
  { id: 2, title: 'Review JavaScript basics', completed: false },
  { id: 3, title: 'Learn React hooks', completed: true },
  { id: 4, title: 'Push code to GitHub', completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // Handlers to update tasks passed down
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = (newTaskTitle) => {
    if (newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTaskTitle.trim(), completed: false }
      ]);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 p-6" style={{ paddingTop: '3rem' }}>
       
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <section id="profile" className="w-full max-w-7xl">
                  <ProfileCard />
                </section>
                <section id="task" className="w-full max-w-7xl">
                  <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} addTask={addTask} />
                </section>
                <section id="statistics" className="w-full max-w-7xl">
                  <Statistics tasks={tasks} />
                </section>
                {/* Placeholder sections for login and signup */}
                <section id="login" className="w-full max-w-7xl">
                    <Login1 />  
                </section>
                <section id="signup" className="w-full max-w-7xl">
                    <Signup />  
                </section>
              </>
            }
          />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
