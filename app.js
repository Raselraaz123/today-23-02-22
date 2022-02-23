const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
    .then(data=>loaddata(data))
}

const loaddata = data=>{
    const elements = document.getElementById('quate')
    elements.innerText = data.quote;

}


const loadcommint = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
    .then(data=>anothecommint(data))
}
const anothecommint = data => {
    const newElement22 = document.getElementById('commint');
    const newElement=document.createElement('div')
    newElement.innerHTML = `<h2>new commint ${data.title}</h2>
    <p> true and flase ${data.completed}</p>`
    newElement22.appendChild(newElement);
}



function loadcommint21() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
    .then(data=>mmmmm(data))
}
function mmmmm(data) {
    const tot = document.getElementById('commint2')
    for (const to of data) {
        const p = document.createElement('p');
        p.innerText = `title: ${to.title} true and flases ${to.completed}`
        tot.appendChild(p)
    }
}



const randonbudd = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
    .then(data=>radataupData(data))
}

const radataupData = (data) => {
    console.log(data.results)
    const ransomPepol = data.results
    const randonpoplearea = document.getElementById('newbadi')
    for (const pople of ransomPepol) {
        const p = document.createElement('p')
        p.innerText = `name title : ${pople.name.title} frist nam: ${pople.name.first} `
        randonpoplearea.appendChild(p)
    }
    
}


const randomephoto = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
    .then(data=>randomdata(data))
}

const randomdata=(data) => {
    console.log(data.results)
    const newphoto = data.results
    const innerHTML2 = document.getElementById('umpepol');
    for (const forg of newphoto) {
        const div = document.createElement('div');
        div.classList.add('tom')
        div.innerHTML =`new img: <img src="${forg.picture.medium}">`
        innerHTML2.appendChild(div)
    }
}