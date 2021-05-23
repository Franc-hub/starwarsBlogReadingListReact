const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorite: []
		},
		actions: {
			// Fetching the data with the diferent for planets and characters
			fetchingData: dataType => {
				fetch("https://swapi.dev/api/" + dataType + "/")
					.then(res => res.json())
					.then(data => setStore({ [dataType]: data.results }))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
