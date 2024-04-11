var b = document.querySelector("#bulb")
var btn = document.querySelector("button")



var flag = 0

btn.addEventListener("click", function(){
    if(flag == 0){
    b.style.backgroundColor = "yellow"
    console.log("clickoid")
    flag = 1
}else{
b.style.backgroundColor = "white"
flag = 0
}

})