import "../../styles/favourites.scss";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Favourites = () => {
	const { store, actions } = useContext(Context);
	return (
		<div classNameName="btn-group">
			<button
				type="button"
				className="btn btn-danger dropdown-toggle"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Favourites {store.favorite.length}
			</button>
			<div className="dropdown-menu">
				<ul>
					{store.favorite.length > 0 ? (
						store.favorite.map((favorite, index) => {
							return (
								<li key={index}>
									<span>{favorite}</span>
									<i
										id="delete"
										className="far fa-trash-alt pointer trash"
										onClick={() => {
											actions.deleteFavorite({ index });
										}}
									/>
								</li>
							);
						})
					) : (
						<span>Empty</span>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Favourites;
