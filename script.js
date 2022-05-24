let jokeID = document.getElementById('joke-ID')

// Fetch dad joke API
async function fetchDadJoke() {
    let fetchedDadJoke = await fetch('https://icanhazdadjoke.com/', {
        headers:  {"Accept": "application/json"},
    })
    return await fetchedDadJoke.json()
}

async function displayDadJoke() {
    let dadJoke = await fetchDadJoke()
    jokeID.innerHTML = dadJoke.joke
}