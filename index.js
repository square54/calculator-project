const buttons = document.getElementsByTagName("button");
const display = document.getElementById("calc-display");

[...buttons].forEach( value => {
    if(value.innerHTML === "="){
        value.addEventListener("click",function(){
            let calculation = eval(display.innerHTML);
            if(eval.length <= 17 && display.innerHTML !== "Too Large"){
                display.innerHTML = calculation;
            }else if(display.innerHTML === "Too Large"){
                display.innerHTML = "";
            }else{    
                display.innerHTML = "Too Large"
            }
            
            console.log(display.innerHTML);
        })
    }else if(value.innerHTML === "C"){
        value.addEventListener("click",function(){
            display.innerHTML = "";
            console.log(display.innerHTML);
        })
    }else{
        value.addEventListener("click",function(){
            if(display.innerHTML.length <= 17 && display.innerHTML !== "Too Large"){
                display.innerHTML += value.innerHTML;
            }else if(display.innerHTML === "Too Large"){
                display.innerHTML = "";
            }else{    
                display.innerHTML = "Too Large"
            }
            console.log(display.innerHTML);
        })
    }
    
});