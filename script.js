
let button = document.getElementsByClassName("rating-btn")
let submitButton = document.getElementsByClassName("submitBtn")
let thanksContainer = document.getElementsByClassName("containerSubmit")
let mainContainer = document.getElementsByClassName("container")


let addSelectClass = function(){
    removeSelectClass();
    this.classList.add('selected');
}

let removeSelectClass = function() {
    for (let i =0; i < button.length; i++){
        button[i].classList.remove('selected')
    }
}

for (let i =0; i < button.length; i++){
    button[i].addEventListener("click",addSelectClass)
}

submitButton[0].addEventListener("click", () => {
    thanksContainer[0].classList.remove('hidden')
    mainContainer[0].classList.add('hidden')
})
    


