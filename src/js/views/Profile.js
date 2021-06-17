import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.scss";

const Profile = () => {
	const { actions } = useContext(Context);
	const [user, setUser] = useState(null);

	useEffect(() => {
		let token = actions.getToken();
		fetch("https://3000-red-guppy-ahqrp6ft.ws-eu08.gitpod.io/protected", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
			// body: JSON.stringify({
			// 	token: token
			// })
		})
			.then(res => res.json())
			.then(json => {
				console.log(json);
				setUser(json);
			});
	}, []);
	console.log(user);
	if (user === null) {
		return "You are not logged";
	}

	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">You are logged</h1>
				<p className="lead">{user.logged_in_as.email}</p>
			</div>
		</div>
	);
};

export default Profile;
