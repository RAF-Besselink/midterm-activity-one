import { useParams } from "react-router";
import "./StudentDetails.css";

const StudentDetails = () => {
  const { id } = useParams();

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

  const student = studentData.find((s) => s.id === parseInt(id));

  return (
    <div className="details-container">
      <h1>Student Details</h1>

      {student ? (
        <div className="details-card">
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Course:</strong> {student.course}</p>
        </div>
      ) : (
        <p>Student not found.</p>
      )}
    </div>
  );
};

export default StudentDetails;