import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (input.trim() === '') return alert('Task cannot be empty');

    if (isEditing) {
      const updatedTasks = [...tasks];
      updatedTasks[currentIndex].text = input.trim();
      setTasks(updatedTasks);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      if (tasks.some(task => task.text === input.trim())) return alert('Task already exists');
      const newTask = { text: input.trim(), completed: false };
      setTasks([...tasks, newTask]);
    }
    setInput('');
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    if (isEditing && index === currentIndex) {
      setIsEditing(false);
      setInput('');
    }
  };

  const handleEdit = (index) => {
    setInput(tasks[index].text);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1 className="title">ToDo App</h1>
      <form onSubmit={handleAddOrUpdate} className="form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="input"
        />
        <button type="submit" className="btn-submit">
          {isEditing ? 'Update' : 'Add'}
        </button>
      </form>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task ${task.completed ? 'completed' : ''}`}
          >
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
            <div className="actions">
              <button onClick={() => handleEdit(index)} className="btn edit">✏️</button>
              <button onClick={() => handleDelete(index)} className="btn delete">🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;