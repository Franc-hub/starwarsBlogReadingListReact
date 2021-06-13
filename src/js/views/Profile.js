import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.scss";

const Profile = () => {
	const { actions } = useContext(Context);
	const [user, setUser] = useState(null);

	useEffect(() => {
		let token = actions.getToken();
		fetch("https://3000-bronze-cattle-zh1cwm6x.ws-eu09.gitpod.io/profile", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				token: token
			})
		})
			.then(res => res.json())
			.then(json => {
				console.log(json);
				setUser(json);
			});
	}, []);

	if (user === null) {
		return "You are not logged";
	}

	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">You are logged</h1>
				<p className="lead">{user.email}</p>
			</div>
		</div>
	);
};

export default Profile;
