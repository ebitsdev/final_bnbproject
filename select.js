let restaurantArray = []
let cuisineOptions = []
// let selectedRestaurant = {}
let elImageContainer = document.getElementById('imageContainer')
let elFormContainer = document.getElementById('cuisineOptions')
let elButtonContainer = document.getElementById('Results')
let restaurantLogoGroup = document.getElementsByClassName('restaurant-logo')
let resultPageLink = document.getElementById('results')

function RestaurantObject(name, logoPath, restPath, id, cuisine) {
    this.name = name
    this.logoPath = logoPath
    this.restPath = restPath
    this.id = id
    this.cuisine = cuisine
    this.clicked = 0
    this.shown = 0
}
RestaurantObject.prototype.getLogo = function () {
    return this.logoPath
}

let KadHai = new RestaurantObject('Kadhai', './assets/kadhai.png', './assets/', 'kadhai', 'asian')
let MakiSushi = new RestaurantObject('MakiSushi', './assets/makisushi.jpg', './assets/', 'maki', 'asian')
let Raku = new RestaurantObject('Raku', './assets/raku.png', '', 'Raku', 'asian')
let MonAmi = new RestaurantObject('MonAmi', './assets/monami.jpg', './assets/', 'MonAmi', 'french')
let LeChat = new RestaurantObject('LetChat', './assets/le_chat.jpg', './assets/', 'LeChat', 'french')
let LeVieux = new RestaurantObject('LeVieux', './assets/le_vieux.jpg', './assets/', 'LeVieux', 'french')
let Olazzo = new RestaurantObject('Olazzo', './assets/olazzo.jpg', './assets/rest_olazzo.jpg', 'Olazzo', 'italian')
let Panetteria = new RestaurantObject('Panetteria', './assets/panetteria.jpg', './assets/rest_panetteria.jpg', 'Panetteria', 'italian')
let Cesco = new RestaurantObject('Cesco', './assets/cesco.png', './assets/rest_cesto.jpg', 'Cesco', 'italian')
let Jaleo = new RestaurantObject('Jaleo', './assets/jaleo.jpg', './assets/', 'Jaleo', 'spanish')
let Chipotle = new RestaurantObject('Chipotle', './assets/chipotle.jpg', './assets/', 'Chipotle', 'spanish')
let UncleJulios = new RestaurantObject('UncleJulio', './assets/unclejulios.png', './assets/', 'UncleJulios', 'spanish')

//push  new instances/objects into  characterImageArray
restaurantArray.push(KadHai, MakiSushi, Raku, MonAmi, LeChat, LeVieux, Olazzo,
    Panetteria, Cesco, Jaleo, Chipotle, UncleJulios)
let cuisineSelectors = document.querySelectorAll('input')

// Function to select cuisine category by clicking a radio button for one of the 3 cuisines
function restaurantSelector(clickedElements, restaurants) {
    // Iterate through the restaurants
    for (let restaurant of restaurants) {
        // Iterate through the clicked form elements
        for (let clickedElement of clickedElements) {
            // Add an event listener on the radio button
            clickedElement.addEventListener('click', function (event) {
                if (event.currentTarget.value === restaurant.cuisine) {
                    // Clear the imageContainer div on every click
                    elImageContainer.innerHTML = ''
                    // Generate the 3 restaurant logos per cuisine
                    generateLogoImage(restaurants, clickedElement.value)
                }
                // Access the images of the restaurants per cuisine and check which logo was clicked
                clickedrestaurantLogo(restaurants, elImageContainer.childNodes)
            })
        }
    }
}
// Generate logo images based on cuisine category
function generateLogoImage(restaurants, val) {
    for (restaurant of restaurants){
        // Create the logo img tag
        let logo = document.createElement('img')
        // Check the cuisine type against the value of the input tag to display restaurant logo per cuisine
        if (restaurant.cuisine === val) {
            // Set logo img tag name attribute
            logo.name = restaurant.name
            // Set the logo img tag src attribute value to logoPath property of the restaurant object
            logo.src = restaurant.logoPath
            // Append the logo img element to the DOM
            elImageContainer.appendChild(logo)
        }
    }
}
// Track the clicked logo for processing
function clickedrestaurantLogo(restaurants, logoArrays) {
    // Create a selected restaurant var
    // Here we use the new for of introduced in ES6 to iterate over iterables (array, objects, arguments)
    for (let restaurant of restaurants) {
        //Iterate over the logos using for of syntax
        for (let logo of logoArrays) {
            //Creating an event listener to listen on logo clicks
            logo.addEventListener('click', function (event) {
                // Log the logo for test purpose
                if (event.currentTarget.name === restaurant.name) {
                    // Set the clicked restaurant to the selected restaurant
                    // Add the restaurant object to local storage for the logo that was clicked
                    addDataToLocalStorage(restaurant)
                }
                window.location = './results.html'
            })
        }
    }
}
// Create a function to store the restaurant object instance
function addDataToLocalStorage(data){
    localStorage.setItem('restaurant', JSON.stringify(data))
}

restaurantSelector(cuisineSelectors, restaurantArray)