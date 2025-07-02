import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Navbar from "./src/components/Navbar";
import Settings from "./src/pages/Settings";
import Contact from "./src/pages/Contact";
import Notifications from "./src/pages/Notifications";
import Cart from "./src/pages/Cart";
import Checkout from "./src/pages/Checkout";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Replace these with your actual Firebase config keys
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

initializeApp(firebaseConfig);
const auth = getAuth();

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div className={`app ${theme}`}>
            <Router>
                <Navbar toggleTheme={toggleTheme} theme={theme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login auth={auth} />} />
                    <Route path="/settings" element={<Settings toggleTheme={toggleTheme} theme={theme} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
