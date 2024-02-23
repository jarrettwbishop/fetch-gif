const img = document.querySelector("img");

let gifSearch = "cat";

const searchGif = () => {
	const searchInput = document.getElementById("gif-search-bar");
	gifSearch = searchInput.value;
	searchInput.value = "";
	getGif();
};

const getGif = () => {
	fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=A828jYppPu0MIuSzAwKP7ZlMhjHelImp&s=${gifSearch}`,
		{ mode: "cors" }
	)
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			img.src = response.data.images.original.url;
		})
		.catch((err) => {
			console.log(err);
		});
};

getGif();
