function Header() {
    return (
        <header className="header">
            <div>
                <h2>Dashboard</h2>
                <p>Welcome back! Manage your students.</p>
            </div>

            <div className="profile">
                <span>🔔</span>
                <span>👤 Admin</span>
            </div>
        </header>
    );
}

export default Header;