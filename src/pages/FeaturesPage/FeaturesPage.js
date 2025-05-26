import React from 'react';
import './FeaturesPage.css';

const FeaturesPage = () => {
  return (
    <div className="featurespage">
      <h1>Our Features</h1>
      <div className="feature-item">
        <h2>Feature 1: Task Management</h2>
        <p>Easily create, update, and delete your tasks. Stay organized and keep track of your to-dos with a simple and intuitive interface.</p>
      </div>
      <div className="feature-item">
        <h2>Feature 2: Priority Levels</h2>
        <p>Set priority levels for your tasks (e.g., High, Medium, Low) to focus on what matters most. Visual cues help you identify important tasks at a glance.</p>
      </div>
      <div className="feature-item">
        <h2>Feature 3: Due Dates & Reminders</h2>
        <p>Assign due dates to your tasks and receive reminders (future implementation) so you never miss a deadline. Plan your work effectively.</p>
      </div>
    </div>
  );
};

export default FeaturesPage;
