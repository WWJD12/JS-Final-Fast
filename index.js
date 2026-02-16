const postListEl = document.querySelector(".movie__list");
const id = localStorage.getItem("id");

async function onSearchChange(event) {
    const id = event.target.value;
    renderPost(id);
}

async function renderPost(id) {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=68956156`);
    const postData = await response.json();

    postListEl.innerHTML = postHTML(postData);
}

function postHTML(post) {
    return `
        <div class="movie">
            <div class="movie-card">
                <img src="${post.Poster}" alt="Movie Poster"/>
                <div class="movie-info">
                    <h3 class="movie-title">${post.Title}</h3>
                    <p class="movie-year">${post.Year}</p>
                </div>
            </div>
        </div>
    `;
}

renderPost(id);