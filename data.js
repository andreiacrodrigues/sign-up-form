let form = document.querySelector(".form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    let password1 = document.getElementById("ipass").value
    let password2 = document.getElementById("ipass2").value

    let helpElement = document.querySelector('.help')
    let passwordInputs = document.querySelectorAll('input[type="password"]')

    if(password1 !== password2){
        helpElement.style.display = 'block'
        passwordInputs.forEach(input => {
            input.classList.add('invalid')
        })
        
    } else {
        helpElement.style.display = 'none'
        passwordInputs.forEach(input => {
            input.classList.remove('invalid')
        })
    }
    
})

