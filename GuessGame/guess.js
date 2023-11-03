console.log("my game");
const game=document.getElementById("game");
const front=document.getElementById("front");
let no=document.getElementById("no");
let text=document.getElementById("text");
let ans=Math.floor(Math.random()*100)+1;
let button=document.getElementById("new");
let B=document.getElementById("B");
let D=document.getElementById("D");
let guess=[];
let t;
let i=0;
let stop=()=>{
        button.style.display="block";
        no.style.display="none";
        button.addEventListener('click',()=>{
                front.style.display="block";
                game.style.display="none";
        })
}
let check=(t)=>{
   if(no.value==ans){
        text.innerText="YOUR GUESS IS RIGHT ";
        stop();
   }
   if(no.value>ans){
        text.innerText="YOUR GUESS IS HIGH";
   } 
   if(no.value<ans){
        text.innerText="YOUR GUESS IS LOW";
   }
   if(i==10&& no.value!=ans&&t=="low"){
     text.innerText="BEST LUCK FOR THE NEXT TIME";
     stop();
}   if(i==5&& no.value!=ans&&t=="high"){
     text.innerText="BEST LUCK FOR THE NEXT TIME";
     stop();
}

}
 const compare=()=>{
     let userguess=Number(no.value);
     guess=[...guess,userguess];  
     i=i+1;
     D.innerHTML=guess;
     B.innerHTML=i;
     check(t);
     no.value="";
 }
 console.log(ans);
document.getElementById("b1").addEventListener('click',()=>{
       front.style.display="none";
       game.style.display="block";
       t="low";
})
document.getElementById("b2").addEventListener('click',()=>{
     front.style.display="none";
     game.style.display="block";
     console.log(ans);
     t="high";
})
