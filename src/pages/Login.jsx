import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ auth }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [message, setMessage] = useState("");

    const handleAuth = async () => {
        try {
            if (isRegistering) {
                await createUserWithEmailAndPassword(auth, email, password);
                setMessage("Registered successfully!");
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                setMessage("Logged in successfully!");
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="login">
            <h2>{isRegistering ? "Register" : "Login"}</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuth}>{isRegistering ? "Register" : "Login"}</button>
            <p
                onClick={() => setIsRegistering(!isRegistering)}
                style={{ cursor: "pointer", color: "blue" }}
            >
                {isRegistering ? "Already have an account? Login" : "No account? Register"}
            </p>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
