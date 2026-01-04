import StudentItem from './StudentItem';

const StudentList = ({ students, onDelete }) => {
  if (students.length === 0) {
    return (
      <p className="no-data">
        Henüz öğrenci yok yukarıdaki formu kullanın
      </p>
    );
  }

  return (
    <ul className="student-list">
      {students.map((student) => (
        <StudentItem 
          key={student.id} 
          student={student} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};

export default StudentList;