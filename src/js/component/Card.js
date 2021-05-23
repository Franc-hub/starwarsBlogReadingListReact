import React from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = props => {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState({
		heart: "far fa-heart"
	});
	const history = useHistory();

	return (
		<div>
			<div className="card px-4">
				<img
					src="https://dummyimage.com/400x200/616161/fff"
					className="card-img-top"
					alt="placeholder image 400x200"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						{props.labelText1} {props.text1}
					</p>

					<p className="card-text">
						{props.labelText2} {props.text2}
					</p>
					<p className="card-text">
						{props.labelText3} {props.text3}
					</p>
					<div className="d-flex justify-content-around">
						<div className="col-md-6 align-items-center">
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => history.push("/cardsDetails")}>
								Learn More !
							</button>
						</div>
						<div className="col-md-6 text-center">
							<button
								type="button"
								className="btn btn-outline-warning"
								id="heart"
								onClick={() => {
									actions.addFavorite(props.name);
								}}>
								{store.favorite.includes(props.name) ? (
									<i className="fas fa-heart" />
								) : (
									<i className="far fa-heart" />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	labelText1: PropTypes.string,
	labelText2: PropTypes.string,
	labelText3: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string,
	id: PropTypes.number,
	section: PropTypes.string
};

export default Card;
