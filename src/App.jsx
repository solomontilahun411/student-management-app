import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import StudentForm from "./components/StudentForm";

import "./index.css";

function App() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Abebe Kebede",
            department: "Computer Science",
            year: "Year 1"
        },
        {
            id: 2,
            name: "Mekdes Alemu",
            department: "Information Technology",
            year: "Year 2"
        },
        {
            id: 3,
            name: "Dawit Tesfaye",
            department: "Software Engineering",
            year: "Year 3"
        }
    ]);

    function addStudent(newStudent) {
        setStudents((previousStudents) => [
            ...previousStudents,
            newStudent
        ]);
    }

    return (
        <div className="app">
            <Sidebar />

            <main className="main-content">
                <Header />

                <div className="dashboard-content">
                    <StudentForm onAddStudent={addStudent} />

                    <Dashboard students={students} />
                </div>
            </main>
        </div>
    );
}

export default App;