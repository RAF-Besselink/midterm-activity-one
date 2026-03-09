import {Link} from 'react-router';
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav classname = "navbar">
        <Link to = "/" >HomePage</Link>
        <Link to = "/about"> About</Link>
        <Link to = "/students"> Students</Link>
        </nav>
    );

}
export default Navigation;