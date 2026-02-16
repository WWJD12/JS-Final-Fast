// "https://www.omdbapi.com/?i=tt3896198&apikey=68956156"
// "https://www.omdbapi.com/?i=tt3896198&apikey=68956156&S=fast"
const movieListEl = document.querySelector(".movie-list");

async function main() {
    const response = await fetch(`https://www.omdbapi.com/?s=fast&apikey=68956156`);
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
      <p class="movie__poster">
       <img ${movie.Poster}>
      </p>
      <p class="movie__year">
        ${movie.Year}
      </p>
    </div>
  </div>`
}
main()