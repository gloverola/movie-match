// fetch movie data from OMDB API
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "fbd5d03a",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const input = document.querySelector("input");

let timeoutId;

const onInput = (e) => {
    // on input change, check if a timeoutId is defined and clear it
    if (timeoutId) {
        clearTimeout(timeoutId)
    }

    // wait 1 second before searching for movie
  timeoutId = setTimeout(() => {
    fetchData(e.target.value);
  }, 500);
};

input.addEventListener("input", onInput);
