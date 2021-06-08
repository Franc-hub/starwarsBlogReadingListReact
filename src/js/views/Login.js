import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);
    const body = {
        email: email,
        password: password
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    function validateFormFront() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const SubmitData = () => {
        fetch()
    }
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Login</h1>
                    <p className="lead">
                        <div>
                            <input onChange={e => setEmail(e.target.value)} value={email} placeholder="Send email..." />

                            <input
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                placeholder="Send password..."
                            />
                        </div>

                        <button
                            onClick={() => {
                                validateFormFront();
                                handleSubmit();
                            }}>
                            Send
						</button>
                    </p>
                </div>
            </div>
        </>
    );
    0;
};

export default Login;
