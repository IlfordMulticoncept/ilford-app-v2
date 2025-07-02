import React from "react";

const Settings = ({ toggleTheme, theme }) => {
    return (
        <div className="settings">
            <h2>App Settings</h2>
            <div>
                <p>Theme: {theme === "light" ? "Light Mode" : "Dark Mode"}</p>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>
    );
};

export default Settings;
