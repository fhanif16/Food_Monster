const search = document.getElementById("search").addEventListener('click',function(){

   const foodItems = document.getElementById("foodInput").value;
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res => res.json())
.then(data =>{
    const foods = data.meals;
   // console.log(foods.strMeal);
   for(let i=0;i<foods.length;i++){
       const food = foods[i];
       console.log(food);
   }
   
})

})



