// const getmovies = async(api) => {
//     const responce = await fetch(api);
//     const data = await responce.json();
// }

// function error() {

// }

// function get() {

// }

///////////////////////////////////////////////////////////////////////////////

const apiKey = '2a05ac0d';
const movieId = 'tt3896198';


fetch(` https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        if (data.Response === 'True') {
            getmovie(data);
        } else {
            displayError(data.Error);
        }
    })
    .catch(error => {
        displayError('An error occurred while fetching data.');
        console.error("Error fetching data:", error);
    });


function getmovie(movie) {
    const moviecontainer = document.querySelector('.movie-grid');
    moviecontainer.innerHTML = `
                <div class="movie">
                <img src="${movie.Poster}" alt="${movie.Title} Poster">
                <h3>${movie.Title}</h3>
                <p>Rating: ${movie.imdbRating}</p>
                <p>Year : ${movie.Year}</p>
                <a href="#" class="download-button">Download</a>
                </div>
                 `;
}

function displayError(message) {
    const moviecontainer = document.querySelector('.movie-grid');
    moviecontainer.innerHTML = `<div class="movie"><p style="color: red;">${message}</p></div>`;
}