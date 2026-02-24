import React from 'react';

// 1. CHILD COMPONENT (Receives Props)
function CourseCard({ title, instructor, isCompleted }) {
  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p>Instructor: {instructor}</p>
      
      {/* 2. CONDITIONAL RENDERING (Ternary) */}
      <span style={{ color: isCompleted ? 'green' : 'orange' }}>
        {isCompleted ? '✅ Completed' : '⏳ In Progress'}
      </span>
    </div>
  );
}

// 3. PARENT COMPONENT
export default function Dashboard() {
  const courses = [
    { id: 101, title: 'React Basics', teacher: 'Gemini', status: 'active' },
    { id: 102, title: 'Advanced JS', teacher: 'Sarah', status: 'completed' },
    { id: 103, title: 'CSS Mastery', teacher: 'Mike', status: 'active' },
    { id: 104, title: 'Node.js 101', teacher: 'Gemini', status: 'completed' }
  ];

  // 4. FILTERING (Logic)
  const activeCourses = courses.filter(course => course.status === 'active');

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Active Learning Path</h2>
      
      <div style={gridStyle}>
        {/* 5. LIST RENDERING (.map) */}
        {activeCourses.map((course) => (
          <CourseCard 
            key={course.id} 
            title={course.title} 
            instructor={course.teacher}
            isCompleted={course.status === 'completed'} 
          />
        ))}
      </div>

      {/* 6. CONDITIONAL RENDERING (Logical &&) */}
      {activeCourses.length === 0 && <p>No active courses. Time for a break!</p>}
    </div>
  );
}

// Simple styles for the demo
const cardStyle = { border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px' };
const gridStyle = { display: 'flex', flexWrap: 'wrap' };
