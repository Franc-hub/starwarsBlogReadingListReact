import "../../styles/favourites.scss";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Favourites = () => {
	const { store, actions } = useContext(Context);
	return <div />;
};

export default Favourites;
