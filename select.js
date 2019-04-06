let cuisineArray = []
let cuisineOptions = []
let elImageContainer = document.getElementById('imageContainer')
let elFormContainer = document.getElementById('cuisineOptions')
let elButtonContainer = document.getElementById('Results')
let restoLogoGroup = document.getElementsByClassName('resto-logo')
let resultPageLink = document.getElementById('results')
function RestaurantObject(name, logoPath, restPath, id, cuisine){
    this.name = name
    this.logoPath = logoPath
    this.restPath = restPath
    this.id = id
    this.cuisine = cuisine
    this.clicked = 0
    this.shown = 0
}
RestaurantObject.prototype.getLogo = function(){
    return this.logoPath
}

let KadHai = new RestaurantObject('kadhai', './assets/kadhai.png', '', 'kadhai', 'asian')
let MakiSushi = new RestaurantObject('makiSushi', './assets/makisushi.jpg', '', 'maki', 'asian')
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
let formElement = document.getElementById('restoSelectorForm')
let inputEl = document.querySelectorAll('input')

// let firstImage
// let secondImage
// let thirdImage

let cuisineSpecificLogoArray = []

function logoSort() {
    for (let i = 0; i < cuisineArray.length; i++) {
        if (cuisineArray[i].cuisine === 'italian') {

        } else if (cuisineArray[i].cuisine === 'italian') {
            console.log('test')
        } else if (cuisineArray[i].cuisine === 'french') {
            console.log('test')
        } else {
            console.log('test')
        }
    }
}

function restoRenderer(restos){
    restos.forEach((resto, i) =>{
        if (resto.name === 'Olazzo'){
            // console.log(resto.logoPath, resto.name, resto.cuisine)
            return resto
        }
})}
// Call restoRenderer() function
console.log(restoRenderer(cuisineArray))
// Setting a function to generate the image elements
function createElement(el, name, src){
    const childElement = document.createElement(el)
    childElement.src = src
    childElement.name = name
    // Add a class to resto logos for further processing
    childElement.className = 'resto-logo'
    // const parentElement = parent.appendChild(childElement)
    elImageContainer.appendChild(childElement)
}
// Track the clicked logo for processing
function clickedRestoLogo(logoArray){
    logoArray.forEach((logo, i) => {
        logo.addEventListener('click', function(e){
            // Log the logo for test purpose
            if (e.target.name === 'Olazzo'){
            console.log(cuisineArray[6])
            } else {
                console.log('Sorry this is not Chipotle')
            }
            // window.location = './results.html'
        })
    });
}

function restaurantSelector(elArray) {
    elArray.forEach((inputElement, i) => {
        inputElement.addEventListener('click', function (e) {
            if (e.target.value === 'asian') {
                elImageContainer.innerHTML = ''
                createElement('img', KadHai.name, KadHai.getLogo())
                createElement('img', MakiSushi.name, MakiSushi.getLogo())
                createElement('img', Raku.name, Raku.getLogo())

            } else if (e.target.value === 'french'){
                elImageContainer.innerHTML = ''
                createElement('img', MonAmi.name, MonAmi.getLogo())
                createElement('img', LeChat.name, LeChat.getLogo())
                createElement('img', LeVieux.name, LeVieux.getLogo())
            } else if (e.target.value === 'italian'){
                elImageContainer.innerHTML = ''
                createElement('img', Olazzo.name, Olazzo.getLogo())
                createElement('img', Panetteria.name, Panetteria.getLogo())
                createElement('img', Cesco.name, Cesco.getLogo())
            } else {
                elImageContainer.innerHTML = ''
                createElement('img', Jaleo.name, Jaleo.getLogo())
                createElement('img', Chipotle.name, Chipotle.getLogo())
                createElement('img', UncleJulios.name, UncleJulios.getLogo())
            }
            logoSort()
            // Access the images of the restaurants per cuisine
           clickedRestoLogo(elImageContainer.childNodes)

        })
    });

}
restaurantSelector(inputEl)
// Call the logo click tracker function
