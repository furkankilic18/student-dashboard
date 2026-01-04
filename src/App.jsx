import { useState } from 'react';
import './styles/lab-styles.css';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentControls from './components/StudentControls';

const initialStudents = [
  { id: 1, name: 'Ali', grade: 85 },
  { id: 2, name: 'Siti', grade: 72 },
  { id: 3, name: 'Rahim', grade: 55 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState(true); // true = High to Low

  const addStudent = (newS) => setStudents(prev => [...prev, newS]);
  const deleteStudent = (id) => setStudents(prev => prev.filter(s => s.id !== id));

  // Derived Data: Filtreleme ve Sıralama Zinciri
  const visibleStudents = students
    .filter(s => {
      if (filter === 'pass') return s.grade >= 60;
      if (filter === 'fail') return s.grade < 60;
      return true;
    })
    .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => sortOrder ? b.grade - a.grade : a.grade - b.grade);

  return (
    <div className="app">
      <h1 className="header">Student Dashboard</h1>
      
      <StudentForm onAdd={addStudent} students={students} />
      
      <StudentControls 
        filter={filter} 
        setFilter={setFilter} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        sortOrder={sortOrder} 
        setSortOrder={setSortOrder} 
      />

      {visibleStudents.length === 0 && searchTerm ? (
        <p className="no-data">
          "<em>{searchTerm}</em>" ile eşleşen öğrenci yok
        </p>
      ) : (
        <StudentList 
          students={visibleStudents} 
          onDelete={deleteStudent} 
        />
      )}
    </div>
  );
}

export default App;