const StudentItem = ({ student, onDelete }) => {
  const passed = student.grade >= 60;

  return (
    <li className={`student-item ${passed ? 'student-pass' : 'student-fail'}`}>
      <div>
        <span className="student-name">{student.name}</span>
        <span className="student-grade">{student.grade}</span>
        <span className="student-status">{passed ? 'Pass' : 'Fail'}</span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(student.id)}>
        Delete
      </button>
    </li>
  );
};

export default StudentItem;