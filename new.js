const searchFood = () => {
    const searchfield = document.getElementById('search-field')
    const searchText = searchfield.value
    searchfield.value = " ";
    // console.log(searchText)

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
    // console.log(data.meals)
}
const displaySearchResult = meals => {
    // console.log(meals)
    const searchResult = document.getElementById('sesrchResult');
    searchResult.textContent = " ";
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = ` 
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        </div>
        `
        searchResult.appendChild(div)
    });
}
const loadMealDetail = mealId => {
    // console.log(mealId)
    const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    fetch(url)
        .then(res => res.json())
        .then(data => displaymealDetail(data.meals[0]))
}

const displaymealDetail = meal => {
    console.log(meal)
    const mealDetail = document.getElementById('meal-details');
    mealDetail.textContent = "";
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    `
    mealDetail.appendChild(div)
}