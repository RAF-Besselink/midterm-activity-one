import { Link } from "react-router";


const StudentList = ({ students }) => {
 return (
    <div> 
        <h2>Student List</h2>
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "60%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>
                <Link to={`/studentdetails/${student.id}`}>
                  View Details
                </Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 )
}
export default StudentList;