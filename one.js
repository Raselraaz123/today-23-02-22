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
        span.classList.add('go')
        span.innerHTML = `<img src=" ${counties.flags.png}" alt="">`
        div.appendChild(span)
        console.log(counties.name)
        const span2 = document.createElement('span')
        span2.innerHTML = `<button onclick="loadCountyByName('${counties.name.common}')">click it</button>`
        div.appendChild(span2)
        containerCountry.appendChild(div)

    });
}
// https://restcountries.com/v3.1/name/{name}


const loadCountyByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
    .then(data=>displayCountresDitail(data[0]))
}
const displayCountresDitail = country => {
    const countrydiv = document.getElementById('country-dt')
    countrydiv.innerHTML = `
    <h4>country name:${country.name.common}</h4>
   `
}