var button = document.querySelector(".btn");
button.addEventListener('click',changeColor);
console.log(button.style.backgroundColor)
function changeColor() {
    if(button.style.backgroundColor == "red"){
        button.style.backgroundColor="green";
    }
    else{
        button.style.backgroundColor="red";
    }
}