import { Link } from "react-router";


const StudentList = ({ students }) => {
 return (
    <div> 
        <table className="student-table">
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
                <Link className="details-btn" to={`/studentdetails/${student.id}`}>
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