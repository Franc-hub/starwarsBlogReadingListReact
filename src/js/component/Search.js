import React from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
const Search = () => {
	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			e.preventDefault();
			// alert("found");
		}
	};

	return (
		<div>
			<input type="sumbit" onKeyPress={handleKeyPress} placeholder="Type here to search your target..." />
		</div>
	);
};

export default Search;
