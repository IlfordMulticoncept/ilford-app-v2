import React from "react";

const alerts = [
    { id: 1, location: "University of East London", message: "Request for printer refill" },
    { id: 2, location: "Middlesex University", message: "Urgent toner replacement needed" },
    { id: 3, location: "Queen Mary University", message: "Maintenance request submitted" }
];

const Notifications = () => {
    return (
        <div className="notifications">
            <h2>Live Radar Alerts</h2>
            <p>See support requests from nearby universities:</p>
            <ul>
                {alerts.map((alert) => (
                    <li key={alert.id}>
                        <strong>{alert.location}:</strong> {alert.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
