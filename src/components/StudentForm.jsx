import { useState, useRef } from "react";

function StudentForm({ onAddStudent }) {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [year, setYear] = useState("");

    const nameInputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();

        if (!name.trim() || !department || !year) {
            alert("Please fill in all fields.");
            return;
        }

        const newStudent = {
            id: Date.now(),
            name: name,
            department: department,
            year: year
        };

        onAddStudent(newStudent);

        setName("");
        setDepartment("");
        setYear("");

        nameInputRef.current.focus();
    }

    return (
        <div className="form-container">
            <h2>Add New Student</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Student Name</label>
                    <input
                        ref={nameInputRef}
                        type="text"
                        placeholder="Enter student name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Department</label>
                    <input
                        type="text"
                        placeholder="Enter department"
                        value={department}
                        onChange={(event) => setDepartment(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Year Level</label>
                    <select
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                    >
                        <option value="">Select year</option>
                        <option value="Year 1">Year 1</option>
                        <option value="Year 2">Year 2</option>
                        <option value="Year 3">Year 3</option>
                        <option value="Year 4">Year 4</option>
                    </select>
                </div>

                <button type="submit">Add Student</button>
            </form>
        </div>
    );
}

export default StudentForm;