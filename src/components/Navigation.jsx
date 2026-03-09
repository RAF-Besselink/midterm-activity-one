import {Link} from 'react-router';
import "./Navigation.css";
const Navigation = () => {
    return (
        <nav classname = "navbar">
        <Link to = "/" >Home Page</Link>
        <Link to = "/about">About</Link>
        <Link to = "/studentdetails">Student Details</Link>
        <Link to = "/students">Students</Link>
        </nav>
    );

}
export default Navigation;