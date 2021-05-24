import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Favourites from "../component/Favourites";
export const Navbar = () => {
	const [toggle, setTogggle] = useState(false);
	const history = useHistory();
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="col-md-4 text-center px-4 py-4">
					<img
						className="img-fluid  starwars-img"
						src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
						onClick={() => history.push("/")}
					/>
				</div>
				<div className="col-md-4" />
				<div className="col-md-4">
					<Favourites />
				</div>
			</nav>
		</>
	);
};
