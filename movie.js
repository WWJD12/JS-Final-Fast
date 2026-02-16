// "https://www.omdbapi.com/?i=tt3896198&apikey=68956156"
// "https://www.omdbapi.com/?i=tt3896198&apikey=68956156&S=fast"
const movieListEl = document.querySelector(".movie-list");

async function searchMovies() {
    const searchValue = document.getElementById("searchInput").value;

    if (!searchMovies) {
        alert("Please enter a movie name");
        return;
    }
     const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=68956156`);
    const moviesData = await response.json();

    if (moviesData.Response === "False") {
        movieListEl.innerHTML = "No Movies Found";
        return;
    }
    movieListEl.innerHTML = moviesData.Search.map(movie => userHTML(movie)).join("");
   
}
function showUserPost(id) {
    localStorage.setItem("id", id);
    window.location.href = `http://127.0.0.1:5500/index.html`
}


function userHTML(movie) {
    return `
    <div class="movie" onclick="showUserPost('${movie.imdbID}')">
      <div class="movie__title">
        ${movie.Title}
      </div>
      <img class="movie__poster" src="${movie.Poster}" alt="${movie.Title}">
       <p class="movie__year">
         ${movie.Year}
      </p>
    </div>
  </div>`
}
