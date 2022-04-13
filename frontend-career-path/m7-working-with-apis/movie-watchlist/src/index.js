//Here is your OMDB key: a970ea1c
//https://www.omdbapi.com/?apikey=a970ea1c&s=${search.value}

//TMDP Key example to search by movie name
//https://api.themoviedb.org/3/search/movie?api_key=5044f9df29ae23c4faf87fea1a99fefe&query=<<movie name>>
//Linking to an image example
//https://image.tmdb.org/t/p/w500/<<backdrop_path>>

const movieDiv = document.getElementById("movie-container")
const searchBtn = document.getElementById("search-btn")
const placeholderContainer = document.getElementById("placeholder-container")
const searchBar = document.getElementById("searchbar")
let html = ""
let movieSearch = ""
let newMovies = []

searchBtn.addEventListener("click", () => {
    event.preventDefault()
    fetch(`https://www.omdbapi.com/?apikey=a970ea1c&s=${searchBar.value}`)
        .then(res => res.json())
        .then(data => {
            if (data.Response === "False") {
                errorMessage()
            } else {
                movieDiv.innerHTML = ""
                placeholderContainer.innerHTML = ""
                searchBtn.disabled = true
                html = ""
                data.Search.map(movie => fetch(`https://www.omdbapi.com/?apikey=a970ea1c&i=${movie.imdbID}`)
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                          
                            const {Poster, Title, Runtime, Genre, imdbRating, Plot, imdbID} = data
                            html += `
                            <div class="flex-row movie-cell">
                                <div class="movie-poster">
                                <img src="${Poster}" alt="Poster image for ${Title}">
                                </div>
                                
                                <div class="flex-column left-align text-box">
                                    <div>
                                        <p class="movie-title">${Title}<span class="rating">⭐${Math.round(imdbRating)}<span></p>
                                        <div id="${imdbID}" class="flex-row movie-info">
                                            <p>${Runtime}</p>
                                            <p>${Genre}</p>
                                            <button class="watchlist-add"><span class="movie-info material-icons">add_circle</span>  Watchlist</button>
                                            <button class="watchlist-remove"><span class="movie-info material-icons">remove_circle</span>  Watchlist</button>
                                        </div>
                                    </div>
                                    
                                    <div>
                                    <p class="movie-description">${Plot}</p>
                                    </div>
                                </div>
                            </div>
                            `     
                movieDiv.innerHTML = html
                searchBar.value = ""
                searchBtn.disabled = false
                     }))
        } 
    })
})

movieDiv.addEventListener('click', e => {
    let target = e.target.closest('button')
    if (target) {
        let parentCell = target.parentElement
        let movieCell = e.target.closest('.movie-cell')
        if (target.className === 'watchlist-add') {
            localStorage.setItem(parentCell.id, movieCell.innerHTML)
            target.style.display = 'none'
            target.nextElementSibling.style.display = 'flex'
        } else if (target.className === 'watchlist-remove') {
            localStorage.removeItem(parentCell.id)
            target.style.display = 'none'
            target.previousElementSibling.style.display = 'flex'
        }
    }
})


function errorMessage() {
    movieDiv.innerHTML = ""
    placeholderContainer.innerHTML = `
        <p class="greyscale">Unable to find what you are looking for.</p>
        <p class="greyscale">Please try another search.</p>
    `
}

