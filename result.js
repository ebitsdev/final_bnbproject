'strict mode'
// To read selected restaurant object from the local storage
function getDataFromLocalStorage(){
    let data = JSON.parse(localStorage.getItem('restaurant'))
    console.log(data)
    selectedRestaurant(data)
    return data
 }
 // Create a function to generate selected restaurant object
 function selectedRestaurant(restaurant){
     // Reference DOM elements
     let restoDiv = document.getElementById('result-image')
     let restoName = document.getElementById('restaurant-name')

     let restoImg = document.createElement('img')
     let restoId = document.createElement('span')
 // Setting the values of the DOM elements
     //Setting restaurant name
     restoName.innerText = `This is the ONE you're looking for: ${restaurant.name}`
     // restaurant image
     restoImg.src = restaurant.restPath
     // restaurant ID
     restoId.innerText = restaurant.id

     // append the restaurant image
     restoDiv.appendChild(restoImg)
     // code to be replaced
     restoDiv.appendChild(restoId)
 }
 getDataFromLocalStorage()