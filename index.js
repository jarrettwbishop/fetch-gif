const img = document.querySelector("img");

const fetchCatGif = () => {
	fetch(
		"https://api.giphy.com/v1/gifs/translate?api_key=A828jYppPu0MIuSzAwKP7ZlMhjHelImp&s=cats",
		{ mode: "cors" }
	)
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			img.src = response.data.images.original.url;
		});
};

fetchCatGif();
