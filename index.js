// fetch movie data from OMDB API
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "fbd5d03a",
      s: searchTerm,
    },
  });

  if (response.data.Error) {
      return [];
  }

  return response.data.Search;
};

const input = document.querySelector("input");


const onInput = debounce( async (e) => {
    const movies = await fetchData(e.target.value);
    
    for (let movie of movies) {
        const div = document.createElement("div");

        div.innerHTML = `
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>
    `;

        document.querySelector('#target').appendChild(div)
    }

}, 500);

input.addEventListener("input", onInput);
