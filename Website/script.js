function loading(){
var tl=gsap.timeline();
tl.to("#yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
})
tl.from("#yellow2",{
    top:"100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
},"var")

tl.to("#loader h1",{
    delay:0.5,
    duration:0.5,
    color:"black"
},"var")
 tl.to("#loader",{
    display:"none"
 })
}
loading();
const scroll= new LocomotiveScroll({
    el:document.querySelector('[data-scroll-container]'),
    smooth:true
})
var pg2=document.querySelector("#page2");
var elements=document.querySelectorAll(".elem");
elements.forEach(function(elem){
    let bg=elem.getAttribute("data-img");
    elem.addEventListener("mouseenter",function(){
       pg2.style.backgroundImage=`url(${bg})`;      
    })
    elem.addEventListener("mouseout",function(){
        pg2.style.background="none" ;     
     }) 
})
var imgDiv1=document.querySelectorAll(".line-1 .img-div");
var imgDiv2=document.querySelectorAll(".line-2 .img-div");
var imgDiv3=document.querySelectorAll(".line-3 .img-div");

imgDiv1.forEach(function(elem){
    elem.style.height="500px";
});
imgDiv2.forEach(function(elem){
    elem.style.height="450px";
});
imgDiv3.forEach(function(elem){
    elem.style.height="500px";
});





