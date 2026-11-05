
function Dashboard({ students, onDeleteStudent }) {
    return (
        <div>

            <div className="stats-grid">

                <div className="stat-card">
                    <h3>Total Students</h3>
                    <h1>{students.length}</h1>
                    <p>Registered students</p>
                </div>

                <div className="stat-card">
                    <h3>Total Teachers</h3>
                    <h1>18</h1>
                    <p>Active teachers</p>
                </div>

                <div className="stat-card">
                    <h3>Total Courses</h3>
                    <h1>32</h1>
                    <p>Available courses</p>
                </div>

                <div className="stat-card">
                    <h3>Pending Requests</h3>
                    <h1>12</h1>
                    <p>Waiting for approval</p>
                </div>

            </div>

            <div className="table-container">
                <h2>Recent Students</h2>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Year</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.department}</td>
                                <td>{student.year}</td>
                                <td>
                                    <button
                                        className="delete-btn"
                                        onClick={() => onDeleteStudent(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {students.length === 0 && (
                    <p>No students found.</p>
                )}
            </div>

        </div>
    );
}

export default Dashboard;
