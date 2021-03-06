const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorite: [],
			token: null,
			user: null
		},
		actions: {
			// Fetching the data with the diferent for planets and characters
			fetchingData: dataType => {
				fetch("https://swapi.dev/api/" + dataType + "/")
					.then(res => res.json())
					.then(data => setStore({ [dataType]: data.results }))
					.catch(error => console.log(error));
			},

			// adding in favourites function used in CardDetail and Navbar components
			addFavorite: item => {
				const store = getStore();
				const validate = store.favorite.includes(item);
				if (store.favorite == [] || !validate) {
					setStore({ favorite: [...store.favorite, item] });
				}
			},
			//Delte favourites function used in CardDetail and Navbar components
			deleteFavorite: id => {
				const store = getStore();
				const updatedList = [...store.favorite];
				updatedList.splice(id, 1);
				setStore({ favorite: [...updatedList] });
			},
			setToken: token => {
				setStore({ token: token });
			},
			setUser: user => {
				setStore({ user: user });
			},

			getToken: () => {
				const store = getStore();
				return store.token;
			},
			getStorageToken: () => {
				localStorage.getItem("token");
			},
			setStorageToken: () => {
				const store = getStore();
				localStorage.setItem("token", store.token);
			}
		}
	};
};

export default getState;
