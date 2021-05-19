import React from "react";

import { useHistory } from "react-router-dom";
export const Navbar = () => {
	const history = useHistory();
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="row">
					<div className="col-md-4 text-center px-4 py-4">
						<img
							className="img-fluid  starwars-img"
							src="https://e7.pngegg.com/pngimages/716/58/png-clipart-logo-star-wars-r2-d2-emblem-stormtrooper-star-wars-origami-emblem-text.png"
							onClick={() => history.push("/")}
						/>
					</div>
					<div className="col-md-4" />
					<div className="col-md-4 text-center px-4 py-4">
						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Dropdown button
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
