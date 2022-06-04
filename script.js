// Initialize DOM elements
let jokeID = document.getElementById('joke-ID')
let errorDisplay = document.getElementById('errorDisplay')
let jokeButton = document.getElementById('get-joke-button')
let favoriteButton = document.getElementById('addToFavorite')
let viewFavorites = document.getElementById('viewFavorite')
let favoriteIcon = document.getElementById('favoriteIcon')

// Fetch dad joke API
async function fetchDadJoke() {
    let fetchedDadJoke = await fetch('https://icanhazdadjoke.com/', {
        headers:  {"Accept": "application/json"},
    })
    if(fetchDadJoke.ok == false)
    {
        errorDisplay.hidden == false
    } else if (errorDisplay.hidden == true) {
        errorDisplay.hidden == false
    }
    return await fetchedDadJoke.json()
}

async function displayDadJoke() {
    let dadJoke = await fetchDadJoke()
    jokeID.innerHTML = dadJoke.joke
    favoriteIcon.innerHTML = ''
}

// Function to store value to storage
async function addJokeToFavorite() {
    favoriteIcon.innerHTML = '★'
    let jokeData = jokeID.innerHTML
    localStorage.setItem('savedJoke', jokeData)
    let dataItem = localStorage.getItem('savedJoke')
    return dataItem
}

async function viewFavoriteJokes() {
    // needs to take stored data and display in temp element
    jokeID.innerHTML = localStorage.getItem('savedJoke')
    favoriteIcon.innerHTML = '★'
}

// Event listeners
jokeButton.addEventListener("click", displayDadJoke)
favoriteButton.addEventListener("click", addJokeToFavorite)
viewFavorites.addEventListener("click", viewFavoriteJokes)
