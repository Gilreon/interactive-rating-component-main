
let button = document.getElementsByClassName("btn");

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



document.getElementsByClassName("selectedBtn").addEventListener("click", displayCard);

function displayCard() {

    document.getElementsByClassName("container").style.visibility = "hidden";
    document.getElementsByClassName("containerSubmit").style.visibility = "visible";
}
    