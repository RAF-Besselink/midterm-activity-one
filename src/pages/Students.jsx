import {useState, useEffect} from "react";


const Students = () => {
    const [students, setStudents] = useState([]);

const studentData = [
  { id: 1, name: "Juan Dela Cruz", course: "BSIT" },
  { id: 2, name: "Maria Santos", course: "BSCS" },
  { id: 3, name: "Pedro Reyes", course: "BSCpE" },
  { id: 4, name: "Ana Lopez", course: "BSIT" },
  { id: 5, name: "Mark Garcia", course: "BSCS" },
  { id: 6, name: "Liza Fernandez", course: "BSCpE" },
  { id: 7, name: "Carlos Mendoza", course: "BSIT" },
  { id: 8, name: "Sofia Ramos", course: "BSCS" },
  { id: 9, name: "Daniel Torres", course: "BSIT" },
  { id: 10, name: "Angela Bautista", course: "BSIT" }
];

    useEffect(() => {
        setStudents(studentData);
    }, []);

    return (
        <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>
    </div>
    );
};
export default Students;