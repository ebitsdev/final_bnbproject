let cuisineArray = []
let cuisineOptions = []
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

let KadHai = new RestaurantObject('Kadhai', './assets/kadhai.png', '', 'kadhai', 'asian')
let MakiSushi = new RestaurantObject('MakiSushi', './assets/makisushi.jpg', '', 'maki', 'asian')
let Raku = new RestaurantObject('Raku', './assets/raku.png', '', 'Raku', 'asian')
let MonAmi = new RestaurantObject('MonAmi', './assets/monami.jpg', '', 'MonAmi', 'french')
let LeChat = new RestaurantObject('LetChat', './assets/le_chat.jpg', '', 'LeChat', 'french')
let LeVieux = new RestaurantObject('LeVieux', './assets/le_vieux.jpg', '', 'LeVieux', 'french')
let Olazzo = new RestaurantObject('Olazzo', './assets/olazzo.jpg', 'rest_olazzo.jpg', 'Olazzo', 'italian')
let Panetteria = new RestaurantObject('Panetteria', './assets/panetteria.jpg', 'rest_panetteria.jpg', 'Panetteria', 'italian')
let Cesco = new RestaurantObject('Cesco', './assets/cesco.png', 'rest_cesto.jpg', 'Cesco', 'italian')
let Jaleo = new RestaurantObject('Jaleo', './assets/jaleo.jpg', '', 'Jaleo', 'spanish')
let Chipotle = new RestaurantObject('Chipotle', './assets/chipotle.jpg', '', 'Chipotle', 'spanish')
let UncleJulios = new RestaurantObject('UncleJulio', './assets/unclejulios.png', '', 'UncleJulios', 'spanish')

//push  new instances/objects into  characterImageArray
cuisineArray.push(KadHai, MakiSushi, Raku, MonAmi, LeChat, LeVieux, Olazzo,
    Panetteria, Cesco, Jaleo, Chipotle, UncleJulios)
let cuisineSelectionButton = document.querySelectorAll('input')

// Track the clicked logo for processing
function clickedrestaurantLogo(restaurants, logoArrays) {
    let selectedRestaurant
    // Create a selected restaurant var
    for (let restaurant of restaurants) {
        for (let logo of logoArrays) {
            logo.addEventListener('click', function (e) {
                // Log the logo for test purpose
                if (e.currentTarget.name === restaurant.name) {
                    // Set the clicked restaurant to the selected restaurant
                    selectedRestaurant = restaurant
                    console.log(selectedRestaurant)
                }
                // window.location = './results.html'
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
restaurantSelector(cuisineSelectionButton, cuisineArray)