let cuisineArray = []
let cuisineOptions = []
let elImageContainer = document.getElementById('imageContainer')
let elFormContainer = document.getElementById('cuisineOptions')
let elButtonContainer = document.getElementById('Results')

function RestaurantObject(name, logoPath, restPath, id, cuisine) {
    this.name = name
    this.logoPath = logoPath
    this.restPath = restPath
    this.id = id
    this.cuisine = cuisine {
        asian: ''
        french: ''
        italian: ''
        spanish: ''
    }
    this.clicked = 0
    this.shown = 0
}

let KadHai = new RestaurantObject('kadhai', './assets/Kadhai.jpg', '', 'kadhai', 'asian')
let MakiSushi = new RestaurantObject('makiSushi', '.assets/makisushi.jpg', '', 'maki', 'asian')
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
// let elForm = document.createElement('form')
// let elRadioSelector = document.createElement('input')
// let elRadioLabel = document.createElement('label')

// //create form which uses cuisineOptions properties to dynamically create radio buttons from the array of cuisines
// function displayRadioButtons(){
//     elFormContainer.innerHTML = ''
//     for (let i = 0; i < cuisineArray.length; i++){
//         elFormContainer.appendChild(elRadioSelector)
//        // let radioObject = elRadioSelector(cuisineOptions.length)
//         let cuisineName = JSON.stringify(cuisineArray[i].cuisine)
//         console.log(cuisineName)
//         return cuisineName
//     }

//     elForm.appendChild(elRadioSelector)
//     elForm.addEventListener('click', logoSort)
// }

// let firstImage
// let secondImage
// let thirdImage

let cuisineSpecificLogoArray = []

// function logosImage(){
//     let number = cuisineSpecificLogoArray.length
//     let logoIndex = cuisineSpecificLogoArray[number]
//      logoIndex.shown += 3
//     return logoIndex
// }

function logoSort() {
    for (let i = 0; i < cuisineArray.length; i++) {
        if (cuisineArray[i].cuisine === 'spanish') {
            console.log(cuisineArray[i].cuisine)
        } else if (cuisineArray[i].cuisine === 'italian') {
            console.log(cuisineArray[i].cuisine)
        } else if (cuisineArray[i].cuisine === 'french') {
            console.log(cuisineArray[i].cuisine)
        } else {
            console.log(cuisineArray[i].cuisine)
        }
    }
}

function restaurantSelector(elArray) {
    elArray.forEach(inputElement => {
        inputElement.addEventListener('click', function (e) {
            if (e.target.value === 'asian') {
                console.log(cuisineArray[0].cuisine, cuisineArray[1].cuisine, cuisineArray[2].cuisine)
                //may be create a function to pass the category and display resto logos
                // someFunction(){
                // display resto details
                // }
            }
        })
    });
}
restaurantSelector(inputEl)
// function displaylogo(){
//     elImageContainer.innerHTML = ''
//     for(let i = 0; i < cuisineSpecificLogoArray; i++){
//         let imageObject = logoImage()

//         if (i = 0) {
//             firstImage = imageObject
//         } else if (i = 1){
//             while (imageObject.id === firstImage.id)
//             imageObject = logoImage()
//             console.log('second while', imageObject.id)

//         } else {
//             while (imageObject.id === firstImage.id || imageObject.id === secondImage.id){
//                 imageObject = logoImage()
//                 console.log('third while', imageObject.id)
//                 }
//             thirdImage = imageObject
//         }

//         let elImage = document.createElement('img')
//         elImageContainer.appendChild(elImage)
//         elImage.setAttribute('id', imageObject.id)
//         elImage.src = imageObject.logoPath
//         elImage.addEventListener('click', imageClicked)
//         imageObject.shown += 3

//     }
// }