// import React from "react";
// import { useState, useContext, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// const Search = () => {
// 	const { store, actions } = useContext(Context);
// 	const params = useParams();
// 	const [DataInfo, setDataInfo] = useState("");
// 	const [input, setInput] = useState("");
// 	useEffect(() => {
// 		if (params.section == "character") {
// 			setDataInfo(store.people[params.id]);
// 			console.log(DataInfo, "del if");
// 		} else {
// 			setDataInfo(store.planets[params.id]);
// 			console.log(DataInfo, "del else");
// 		}
// 	}, []);

// 	const updateInput = async input => {
// 		const filtered = DataInfo.filter(planets => {
// 			return planets.name.toLowerCase().includes(input.toLowerCase());
// 		});
// 		setInput(input);
// 		setDataInfo(filtered);
// 	};

// 	const handleKeyPress = e => {
// 		if (e.key === "Enter" && e.target.value !== "") {
// 			e.preventDefault();
// 			// alert("found");
// 		}
// 	};

// 	return (
// 		<div>
// 			<input
// 				type="sumbit"
// 				onKeyPress={handleKeyPress}
// 				placeholder="Type here to search your target..."
// 				value={input}
// 				onChange={e => setInput(e.target.value)}
// 			/>
// 			<div>
// 				{DataInfo.planets.map((name, index) => {
// 					<ul>
// 						<li key={index}>{DataInfo.planets.name}</li>
// 					</ul>;
// 				})}
// 			</div>
// 		</div>
// 	);
// };

// export default Search;
