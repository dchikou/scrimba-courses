const savedList = document.getElementById("saved-list")
const placeholder = document.getElementById("placeholder-container")

savedList.addEventListener("click", e => {
    const target = e.target.closest(".watchlist-remove")
    if(target) {
    localStorage.removeItem(target.parentElement.id)
    const targetAncestor = target.closest(".movie-cell")
    renderList() 
    }
})

function renderList() {
    if (localStorage.length) {
        placeholder.innerHTML = ""
        savedList.innerHTML = ""
        for (let i = 0; i < localStorage.length; i++) {
            const savedMovie = document.createElement("div")
            savedMovie.setAttribute("class", "movie-cell flex-row")
            savedMovie.innerHTML = localStorage.getItem(localStorage.key(i))
            savedList.append(savedMovie)
        }
    } else {
        savedList.innerHTML = ""
        placeholder.innerHTML = `
            <p class="greyscale">Your watchlist is looking a little empty...</p>
            <a href="./index.html" class="flex"><span class="material-icons">add_circle</span>
            Let's add some movies!</a>
            `
    }
}

renderList()
