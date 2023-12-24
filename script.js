var car = document.getElementById("car");
var park = document.getElementById("park");

var x = 0;
var i;
var w = window.innerWidth-160;
function f1(){
    clearInterval(i);
    i=setInterval(function(){
    if(x<w){
        x+=1;
        car.style.left=x+"px";
    }else{
        clearInterval(i);
        park.style.transform="rotate(20deg) translate(20px,-13px)";
    }
 }, 1);
}
function f2(){
    clearInterval(i);
    park.style.transform="rotate(0deg) translate(0px,0px)";
    i=setInterval(function(){
        if(x>0){
            x-=1;
            car.style.left=x+"px";
        }else{
            clearInterval(i);
        }
    }, 1);
}
function f3(){
    clearInterval(i);
}
function f4(){
    clearInterval(i);
    x=0;
    car.style.left="0px";
    park.style.transform="rotate(0deg) translate(0px,0px)";
}
function resize(){
    w=window.innerWidth-160;
    location.reload();
}