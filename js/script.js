const form = document.getElementById("form")
const formInput = document.getElementById("email")
const formButton = document.getElementById("formBtn")
const warn = document.querySelector("#warn")


console.log(form, formInput, formButton, warn)
 
formButton.addEventListener("click", checkInput)

function checkInput() {
}

formInput.oninput = () => {
    warn.classList.add("hidden")
}

formInput.oninvalid = () => {
    warn.classList.remove("hidden")
}