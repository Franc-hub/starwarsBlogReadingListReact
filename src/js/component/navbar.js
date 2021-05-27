import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Favourites from "../component/Favourites";
import Search from "../component/Search";
export const Navbar = () => {
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
				<div className="col-md-4 text-center">{/* <Search /> */}</div>
				<div className="col-md-4 text-center">
					<Favourites />
				</div>
			</nav>
		</>
	);
};
