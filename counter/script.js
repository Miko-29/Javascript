var counter = document.getElementById("counter");
// var decrease = document.getElementById("decrease");
// var reset = document.getElementById("reset");
// var increase = document.getElementById("increase");


// decrease.addEventListener('click',decreaseCounter);
// reset.addEventListener('click',resetCounter);
// increase.addEventListener('click',increaseCounter);

// function decreaseCounter(){
//     var count = parseInt(counter.textContent);
//     count--;
//     counter.textContent = count;
// }

// function resetCounter(){
//     counter.textContent = 0;
// }

// function increaseCounter(){
//     var count = parseInt(counter.textContent);
//     count++;
//     counter.textContent = count;
// }
var count=0;
var btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click',function(e){
        classes = e.currentTarget.classList;
        if(classes.contains('decrease')){
            count--;
        }
        else if(classes.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count<0){
            counter.style.color = "red";
        }
        else if(count>0){
            counter.style.color = "green";
        }
        else{
            counter.style.color = "black";
        }
        counter.textContent=count;
    })
    
});