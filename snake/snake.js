let front=document.getElementById("front");
let back=document.getElementById("back");
let low=document.getElementById("low");
let hard=document.getElementById("high");
let khel="on";
let speed;
high.addEventListener('click',()=>{
    front.style.display="none";
    back.style.display="flex";
    speed=8;
})
low.addEventListener("click",()=>{
    front.style.display="none";
    back.style.display="flex";
    speed=2;
})

let inpdir={
    x:0,
    y:0,
}

let lastpaintTime=0;
let snakeArr=[
    {x:13,y:15}
]
let food={x:16,y:4};
function iscollide(snakeArr){//game over
    //if u collide with body
    for(let index=1;index<snakeArr;index++){
        if(snakeArr[index].x === snakeArr[0].x &&snakeArr[index].y === snakeArr[0].y){
            return true;
        }}// if snake collide with wall
        if(snakeArr[0].x>=20 ||snakeArr[0].x<=0 && snakeArr[0].y>=20 ||snakeArr[0].y<=0){
            return true;
        }
    }

function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastpaintTime)/1000<1/speed){
        return;
    }
    lastpaintTime=ctime;
    gameEngine();
}
function gameEngine(){
    //part 1: Updating snake arr&food
     if(iscollide(snakeArr)){
        alert("GAME OVER")
        front.style.display="flex";
        back.style.display="none";
      inpdir={
        x:0,
        y:0,
    }
      snakeArr=[
        {x:13,y:15}
    ] ;
    khel="off"
     }
     //if snake eaten the food increment snake 
      if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
        snakeArr.unshift({x:snakeArr[0].x+inpdir.x,y:snakeArr[0].y+inpdir.y});
        let a=2;
        let b=18;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
      } //MOVE snake
      for(let i=snakeArr.length-2;i>=0;i--){
               snakeArr[i+1]={...snakeArr[i]};
      }
      snakeArr[0].x+=inpdir.x;
      snakeArr[0].y+=inpdir.y;
    //part2 :Render the snake and food
    //DIspaly the snake
    grid.innerHTML="";
    snakeArr.forEach((e,index)=>{
             snakeElement=document.createElement("div");
             snakeElement.style.gridRowStart= e.y;
             snakeElement.style.gridColumnStart=e.x;
             if(index==0){
                snakeElement.classList.add('head')
             }
             else{
                snakeElement.classList.add('snake');
             }
             grid.appendChild(snakeElement);
    })
    //Display the food
    snakeArr.forEach((e,index)=>{
        foodElement=document.createElement("div");
        foodElement.style.gridRowStart= food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food');
        grid.appendChild(foodElement);
})
}












window.requestAnimationFrame(main);
if(khel=="on"){
window.addEventListener('keydown',e=>{
    inpdir={x:0,y:1}//start game
    switch(e.key){
        case "ArrowUp":
        //   console.log("arrowUP");
          inpdir.x=0;
          inpdir.y=-1;   
          break;
        case "ArrowDown":
            // console.log("arrowdown");
            inpdir.x= 0;
            inpdir.y= 1;   
            break;
        case "ArrowRight":
            // console.log("arrowright");
            inpdir.x= 1;
            inpdir.y= 0;
            break;
        case "ArrowLeft":
            // console.log("arrowLeft");   
            inpdir.x= -1;
            inpdir.y= 0;
            break;
     default:
        break;     
    }
})
}
