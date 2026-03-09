import {useState, useEffect} from "react";
import {getProducts} from "../services/api";

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
    <>
    <div>
        <h2>Welcome to Student Dashboard</h2>
        <p>This app demonstrates React Router, useState, and useEffect.</p>
    </div>
    </>
    );
}