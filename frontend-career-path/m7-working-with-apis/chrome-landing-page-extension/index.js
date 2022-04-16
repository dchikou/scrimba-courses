fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch("https://api.coingecko.com/api/v3/coins/garlicoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>📈: $${data.market_data.high_24h.usd}</p>
            <p>📉: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=1e68e963d88f31f3ea95a53e47ae3c38`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});

 fetch("https://api.goprogram.ai/inspiration")
    .then(res => {
        if (!res.ok) {
            throw Error("Quote data not available")
        }
       return res.json()
    })
    .then(data => {
        document.getElementById("inspiration").innerHTML += `
            <p class="quote">${data.quote}</p>
            <p class="quote">- ${data.author}</p>
            `
    })
    .catch(err => console.error(err))

function top_site(urls){   
    let siteList = document.getElementById('most-visited')
    for (let i = 0; i < urls.length; i++) {
        siteList.innerHTML +=` 
        <a class="link" href="${urls[i].url}">
        <img class="favicon" src="https://s2.googleusercontent.com/s2/favicons?domain_url=${urls[i].url}" /><br>
        ${urls[i].title.substring(0,20)}...</a><br>
        `   
        // https://s2.googleusercontent.com/s2/favicons?domain_url=${urls[i].url}   
        // chrome://favicon/${urls[i].url} need to work with this
        // chrome://favicon2/?size=24&scale_factor=1x&show_fallback_monogram=&page_url=https%3A%2F%2F${urls[i].url}%2F
    }
}

chrome.topSites.get(top_site);

function getBaseUrl(data) {
    data = new RegExp(/^.*\/\/[^\/]+/);
    return data.exec(window.location.href);
}