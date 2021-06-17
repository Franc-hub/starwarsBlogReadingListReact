import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const body = {
		email: email,
		password: password,
		is_logged: true
	};

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	};

	const SubmitData = () => {
		fetch("https://3000-red-guppy-ahqrp6ft.ws-eu08.gitpod.io/login", options)
			.then(res => res.json())
			.then(json => {
				actions.setToken(json.accessToken);
				actions.setStorageToken(json.accessToken);
				history.push("/profile");
			});
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
};

export default Login;
