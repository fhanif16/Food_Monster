const search = document.getElementById("search").addEventListener('click',function(){

   const foodItems = document.getElementById("foodInput").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ foodItems }`)
.then(res => res.json())
.then(data =>{
    document.getElementById('foods').innerHTML = "";
            document.getElementById('foodsInfo').innerHTML = ' ';
    const foodsOrder = data.meals;
   // console.log(foods.strMeal);
   for(let i=0;i<foodsOrder.length;i++){
       const foodOrder = foodsOrder[i];
       //console.log(food);
       const food = document.createElement('div')
                food.innerHTML = `
            <img src="${ foodOrder.strMealThumb }" onClick(${ foodOrder.idMeal })">
            <h1 onClick(${ foodOrder.idMeal })" >${ foodOrder.strMeal }</h1>
            `;
                food.className = "card";
                foods.appendChild(food);
   }

   
})
.catch(error => {
            console.log(error);
            document.getElementById('foods').innerHTML = "";
            document.getElementById('foodsInfo').innerHTML = ' ';
            const foods = document.getElementById('foods');
            const notFound = document.createElement('h1')
            notFound.innerHTML = `<h1 class="center">Your desire item is not in our list.</h1>
            <h1 class="center">Please try other items</h1>`;
            foods.appendChild(notFound);
        })
})

let foodIngredients = ingredients =>{
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then(res => res.json())
    .then(data => 
        {
            console.log(data);
        })

}





