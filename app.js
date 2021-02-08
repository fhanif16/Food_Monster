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
             <img src="${ foodOrder.strMealThumb }" onClick="foodIngredients(${ foodOrder.idMeal })">
             <h1 onClick="foodIngredients(${ foodOrder.idMeal })" >${ foodOrder.strMeal }</h1>
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
      
     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredients}`)
     .then(res => res.json())
     .then(data => 
        {
            console.log(data.meals[0]);
          const foodsIngi = data.meals[0];
            for(let i=0;i<foodsIngi.length;i++){
                let foodIngi = foodsIngi[i];
               // console.log(foodIngi); 
            } 
           const foodsInfo = document.getElementById("foodsInfo");
            document.getElementById('foodsInfo').innerHTML = ' ';
            document.getElementById('foodsInfo').style.display= 'block';
           let foodsDetails= document.createElement('div'); 
          foodsInfo.innerHTML=`
           <h1> Items Name </h1>
           <br>
           
           <h1> Food Area:</h1>
           <p>${foodsIngi. strArea}</p1>
          <br>
          <p1>${foodsIngi.strMeal}</p1>
           <br>
           <h1> Food Types: </h2>
           <p1>${foodsIngi.strCategory}</p1>
           <br>
           <h1> Food Ingredient:</h1>
           <p1> ${foodsIngi.strIngredient1}</p1>
           <br>
           <p1>${foodsIngi.strIngredient2}</p1>
           <br>
           <p1>${foodsIngi.strIngredient3}</p1>
           <br>
           <p1>${foodsIngi.strIngredient4}</p1>
           <br>
           <p1>${foodsIngi.strIngredient5}</p1>
           <br>
           <p1>${foodsIngi.strIngredient6}</p1>
           <br>
           <p1>${foodsIngi.strIngredient7}</p1>
           <br>
           
          
           `
          
          foodsInfo.appendChild(foodsDetails); 
            
          
         
           
 
      
 
         }) 
   

     
 
 
 
}