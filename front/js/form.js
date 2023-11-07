// Verification du formulaire
let form = document.querySelector('#order')
form.addEventListener('click', (e) => {
    e.preventDefault()
    let isFormOk = true

    let regexName = /[^A-zÀ-ú]/
    let regexAddress = /[^A-zÀ-ú0-9 ]/
    let regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    document.querySelector("#firstNameErrorMsg").innerHTML = null
    document.querySelector("#lastNameErrorMsg").innerHTML = null
    document.querySelector("#addressErrorMsg").innerHTML = null
    document.querySelector("#cityErrorMsg").innerHTML = null
    document.querySelector("#emailErrorMsg").innerHTML = null


    // Récupérer les valeurs
    let prenom = document.querySelector('#firstName').value
    let nom = document.querySelector('#lastName').value
    let adresse = document.querySelector('#address').value
    let ville = document.querySelector('#city').value
    let email = document.querySelector('#email').value
    
    // verification du prenom
    if(regexName.test(prenom) || prenom.length < 2){
        document.querySelector("#firstNameErrorMsg").innerHTML = "Prénom invalide (minimum 2 caractères, pas de numéros)"
        isFormOk = false
    }

    // verification du nom
    if (regexName.test(nom) || nom.length < 2) {
        document.querySelector("#lastNameErrorMsg").innerHTML = "Nom invalide (minimum 2 caractères, pas de numéros)"
        isFormOk = false
    }

    // verification de l'adresse
    if (regexAddress.test(adresse) || adresse.length < 10) {
        document.querySelector("#addressErrorMsg").innerHTML = "Adresse invalide (minimum 10 caractères)"
        isFormOk = false
    }

    // verification de la ville
    if (regexName.test(ville) || ville.length < 2) {
        document.querySelector("#cityErrorMsg").innerHTML = "Ville invalide (minimum 2 caractères)"
        isFormOk = false
    }

    // verification de la ville
    if (regexMail.test(email) === false) {
        document.querySelector("#emailErrorMsg").innerHTML = "Email invalide"
        isFormOk = false
    }

    if(isFormOk){

        
    }
})