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
	};

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	};

	const SubmitData = () => {
		fetch("https://3000-tomato-lynx-ge3mdj1p.ws-eu09.gitpod.io/login", options)
			.then(res => res.json())
			.then(json => console.log(json));
	};
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
								SubmitData();
							}}>
							Login
						</button>
					</p>
				</div>
			</div>
		</>
	);
	0;
};

export default Login;
