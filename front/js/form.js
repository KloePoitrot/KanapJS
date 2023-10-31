// // Verification du formulaire TEST 2
// let form = document.querySelector('p #order')
// form.addEventListener('click', (e) => {
//     console.log(isFormOk)
    
//     // verification du prenom
//     let prenom = document.querySelector('#firstName').value
//     let nom = document.querySelector('#lastName').value
//     let adresse = document.querySelector('#address').value
//     let ville = document.querySelector('#city').value
//     let email = document.querySelector('#email').value
    

//     let isFormOk = true
    
//     e.preventDefault()
// })








// // Verification du formulaire TEST 1
// document.querySelector('#order').addEventListener('click', (e) => {
    
//     document.querySelector("#firstNameErrorMsg").innerHTML = null;
//     document.querySelector("#lastNameErrorMsg").innerHTML = null;
//     document.querySelector("#addressErrorMsg").innerHTML = null;
//     document.querySelector("#cityErrorMsg").innerHTML = null;
//     document.querySelector("#emailErrorMsg").innerHTML = null;
    
//     let regexName = /[^A-zÀ-ú]/;
//     let regexmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    
    
//     // verification du prenom
//     let prenom = document.querySelector('#firstName').value
//     let prenomLenght = document.querySelector('#firstName').value.lenght
//     console.log(prenom, prenomLenght)
//     if(regexName.match(prenom) && prenom.Lenght < 2){
//         document.querySelector("#firstNameErrorMsg").innerHTML = "Prénom invalide (minimum 2 caractères, pas de numéros)"
//         isFormOk = false
//     }

//     // // verification du nom
//     // let nom = document.querySelector('#lastName').value
//     // if(nom.match(regexName)){
//     //     document.querySelector("#lastNameErrorMsg").innerHTML = "Nom invalide (minimum 2 caractères, pas de numéros)"
//     //     isFormOk = false
//     // }

//     // // verification de l'adresse
//     // // let adresse = document.querySelector('#address').value
//     // // if(adresse.leght > 10){
//     // //     document.querySelector("#addressErrorMsg").innerHTML = "Adresse invalide (minimum 10 caratères)"
//     // //     isFormOk = false
//     // // }

//     // // verification de la ville
//     // let ville = document.querySelector('#city').value
//     // if(ville.match(regexName)){
//     //     document.querySelector("#cityErrorMsg").innerHTML = "Ville invalide (minimum 3 caractères, pas de numéros)"
//     //     isFormOk = false
//     // }

//     // // verification de l'email
//     // let mail = document.querySelector('#email').value
//     // if(!mail.match(regexmail)){
//     //     document.querySelector("#emailErrorMsg").innerHTML = "Email invalide"
//     //     isFormOk = false
//     // }

//     e.preventDefault
// })