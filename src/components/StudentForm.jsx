import { useState } from 'react';

const StudentForm = ({ onAdd, students }) => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (grade === '' || grade < 0 || grade > 100) {
      setError("Grade must be 0-100");
      return;
    }
    if (students.some(s => s.name.toLowerCase() === name.toLowerCase())) {
      setError("Student already exists");
      return;
    }

    onAdd({ id: Date.now(), name, grade: Number(grade) });
    setName('');
    setGrade('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input 
        className="input" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        className="input input-grade" 
        type="number" 
        placeholder="Grade" 
        value={grade} 
        onChange={(e) => setGrade(e.target.value)} 
      />
      <button className="btn" type="submit">Add Student</button>
      {error && <span className="form-error">{error}</span>}
    </form>
  );
};

export default StudentForm;