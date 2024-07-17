let buttons = document.querySelectorAll("button");
let deleteButton = document.querySelector("#clear"); 
let equalButton = document.querySelector("#equal");
let textInput = document.querySelector("#text");


for (var i = 0; i < 16; i++) {
    if (i != 12 && i != 14) {
        buttons[i].addEventListener("click", function add(){
            textInput.value = textInput.value + this.value
        });
    }
}

equalButton.addEventListener("click" , ()=>{
    textInput.value = eval(textInput.value)
})


deleteButton.addEventListener("click" , ()=>{
    textInput.value = ""
})