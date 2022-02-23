const loadCountres = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
    .then(data=>displayCountres(data))
}

loadCountres()
const displayCountres = counties => {
    console.log(counties)
    const containerCountry = document.getElementById('allcountry')
    counties.forEach(counties => {
        const div = document.createElement("div")
        div.classList.add('tot')
        const h2 = document.createElement("h2")
        h2.innerText = counties.name.official;
        div.appendChild(h2)
        const p = document.createElement('p');
        p.innerText = counties.capital;
        div.appendChild(p)
        const span = document.createElement("span")
        span.innerHTML = `<img src=" ${counties.flags.png}" alt="">`
        div.appendChild(span)
        const span2 = document.createElement('span')
        span2.innerHTML = `<img src=" ${counties.coatOfArms.svg}" alt="">`
        div.appendChild(span2)
        containerCountry.appendChild(div)

    });
}