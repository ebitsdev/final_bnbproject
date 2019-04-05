let cuisineArray = []
let cuisineOptions = []
let elImageContainer = document.getElementById('imageContainer')
let elFormContainer = document.getElementById('cuisineOptions')
let elButtonContainer = document.getElementById('Results')

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
let KadHai = new RestaurantObject('kadhai', './assets/Kadhai.png', '', 'kadhai', 'asian')
let MakiSushi = new RestaurantObject('makiSushi', './assets/makisushi.jpg', '', 'maki', 'asian')
let Raku = new RestaurantObject('Raku', './assets/Raku.png', '', 'Raku', 'asian')
let MonAmi = new RestaurantObject('MonAmi', './assets/Monami.jpg', '', 'MonAmi', 'french')
let LeChat = new RestaurantObject('LetChat', './assets/Le_Chat.jpg', '', 'LeChat', 'french')
let LeVieux = new RestaurantObject('LeVieux', './assets/Le_Vieux.jpg', '', 'LeVieux', 'french')
let Olazzo = new RestaurantObject('Olazzo', './assets/Olazzo.jpg', '', 'Olazzo', 'italian')
let Panetteria = new RestaurantObject('Panetteria', './assets/Panetteria.jpg', '', 'Panetteria', 'italian')
let Cesco = new RestaurantObject('Cesco', './assets/cesco.png', '', 'Cesco', 'italian')
let Jaleo = new RestaurantObject('Jaleo', './assets/Jaleo.jpg', '', 'Jaleo', 'spanish')
let Chipotle = new RestaurantObject('Chipotle', './assets/Chipotle.jpg', '', 'Chipotle', 'spanish')
let UncleJulios = new RestaurantObject('UncleJulio', './assets/UncleJulios.png', '', 'UncleJulios', 'spanish')

//push  new instances/objects into  characterImageArray
cuisineArray.push(KadHai, MakiSushi, Raku, MonAmi, LeChat, LeVieux, Olazzo, Panetteria, Cesco, Jaleo, Chipotle, UncleJulios)
let formElement = document.getElementById('restoSelectorForm')
let inputEl = document.querySelectorAll('input')

// let firstImage
// let secondImage
// let thirdImage

let cuisineSpecificLogoArray = []

function logoSort() {
    for (let i = 0; i < cuisineArray.length; i++) {
        if (cuisineArray[i].cuisine === 'spanish') {
            console.log(cuisineArray[i].getLogo())
        } else if (cuisineArray[i].cuisine === 'italian') {
            console.log(cuisineArray[i].cuisine)
        } else if (cuisineArray[i].cuisine === 'french') {
            console.log(cuisineArray[i].cuisine)
        } else {
            console.log(cuisineArray[i].cuisine)
        }
    }
}
function createElement(el, src){
    const childElement = document.createElement(el)
    childElement.src = src
    // const parentElement = parent.appendChild(childElement)
    elImageContainer.appendChild(childElement)
}

function restaurantSelector(elArray) {
    elArray.forEach(inputElement => {
        inputElement.addEventListener('click', function (e) {
            if (e.target.value === 'asian') {
                createElement('img', KadHai.getLogo())
                createElement('img', MakiSushi.getLogo())
                createElement('img', Raku.getLogo())
            } else if (e.target.value === 'french'){
                createElement('img', MonAmi.getLogo())
                createElement('img', LeChat.getLogo())
                createElement('img', LeVieux.getLogo())
            } else if (e.target.value === 'italian'){
                createElement('img', Olazzo.getLogo())
                createElement('img', Panetteria.getLogo())
                createElement('img', Cesco.getLogo())
            } else {
                createElement('img', Jaleo.getLogo())
                createElement('img', Chipotle.getLogo())
                createElement('img', UncleJulios.getLogo())
            }
        })
    });

}
restaurantSelector(inputEl)
