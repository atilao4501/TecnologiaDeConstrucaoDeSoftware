// Base da url https://api.themoviedb.org/3/
// url da API movie/now_playing?api_key=f5984d8616be1614331f2870352d0d1e
async function loadFilme() {
  console.log(2);
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing",
    {
      params: {
        api_key: "f5984d8616be1614331f2870352d0d1e",
        language: "pt-BR",
        page: 1,
      },
    }
  );
  /* Logging the first 10 results of the API call. */
  // console.log(response.data.results.slice(0,10));

  console.log("Filmes:", response.data.results);
  const filmes = response.data.results;
  const carouselInner = document.getElementById("carousel-inner");
  carouselInner.innerHTML = ""; // Limpa o conteúdo atual do carrossel
}
