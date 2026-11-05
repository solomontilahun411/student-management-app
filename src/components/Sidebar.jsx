function Sidebar() {
    return (
        <aside className="sidebar">
            <h2 className="logo">StudentMS</h2>

            <nav>
                <a href="#" className="active">🏠 Dashboard</a>
                <a href="#">👨‍🎓 Students</a>
                <a href="#">📚 Courses</a>
                <a href="#">👨‍🏫 Teachers</a>
                <a href="#">📊 Grades</a>
                <a href="#">⚙️ Settings</a>
            </nav>
        </aside>
    );
}

export default Sidebar;