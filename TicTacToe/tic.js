
let music=new Audio('3.mp3')
console.log("hello")
let turn ='X';
let info=document.getElementById("info")
let gameover=false;
const changeturn=()=>{
  if (turn=='X'){
     turn='O';
     info.innerHTML="TURN OF O";
  }
  else{
    turn='X';
    info.innerHTML="TURN OF X";
  }
}
let bord=[ '','','','','','','','',''];
let res=document.getElementById("result")
const win =()=>{
    if((bord[0]==bord[1])&&(bord[1]==bord[2])&&(bord[0]!="")){
      document.querySelector(".line").style.width='20vw';
      document.querySelector(".line").style.transform="translate(5vw,5vw)rotate(0deg)"
      info.innerHTML=bord[0]+"  WINS THE GAME ";
      gameover=true;
    }
    else if((bord[0]==bord[3])&&(bord[3]==bord[6])&&(bord[0]!="")){
      document.querySelector(".line").style.width='20vw'
      document.querySelector(".line").style.transform="translate(-5vw,15vw)rotate(90deg)"
      info.innerHTML=bord[0]+" WINS THE GAME ";
      gameover=true;
    }
    else if((bord[0]==bord[4])&&(bord[4]==bord[8])&&(bord[0]!="")){
      document.querySelector(".line").style.width='20vw'
      document.querySelector(".line").style.transform="translate(5vw,15vw)rotate(45deg)"
      info.innerHTML=bord[0]+" WINS THE GAME ";
      gameover=true;
    }
    else if((bord[1]==bord[4])&&(bord[4]==bord[7])&&(bord[1]!="")){
      document.querySelector(".line").style.width='20vw'
      document.querySelector(".line").style.transform="translate(5vw,15vw)rotate(90deg)"
      info.innerHTML=bord[1]+" WINS THE GAME ";
      gameover=true;
    }
    else if((bord[2]==bord[5])&&(bord[5]==bord[8])&&(bord[2]!="")){
      document.querySelector(".line").style.width='20vw';
      document.querySelector(".line").style.transform="translate(15vw,15vw)rotate(90deg)"
      info.innerHTML=bord[2]+" WINS THE GAME ";
      gameover=true;
    }
    else if((bord[2]==bord[4])&&(bord[4]==bord[6])&&(bord[2]!="")){
      document.querySelector(".line").style.width='20vw'
      document.querySelector(".line").style.transform="translate(5vw,15vw)rotate(135deg)"
      info.innerHTML=bord[2]+" WINS THE GAME ";
      gameover=true;
    }
    else if((bord[3]==bord[4])&&(bord[4]==bord[5])&&(bord[3]!="")){
      document.querySelector(".line").style.width='20vw'

      document.querySelector(".line").style.transform="translate(5vw,15vw)rotate(0deg)"
      info.innerHTML=bord[3]+" WINS THE GAME ";
      gameover=true;
    }
    else if((bord[6]==bord[7])&&(bord[7]==bord[8])&&(bord[8]!="")){
      document.querySelector(".line").style.width='20vw'
      document.querySelector(".line").style.transform="translate(5vw,25vw)rotate(0deg)"
      info.innerHTML=bord[8]+" WINS THE GAME ";
      gameover=true;
    }

}
// music.play()
let count=0;
let arr=Array.from(document.getElementsByClassName("box"));
arr.forEach((Element)=>{
Element.addEventListener('click',(e)=>{
     count=count+1;
     if (count==9){
      info.innerHTML="DRAW MATCH";
     }
    //  console.log(count)
    if (Element.innerText==""){
     Element.innerText=turn;
     index=e.target.id
  // console.log(index)
     bord[index]=turn
  // console.log(bord[index])
     win ()
     if(gameover==true){
      document.getElementById("pic").style.display="flex"
     }
     if (gameover==false&&count<9){
    changeturn()
    }
}})
})
document.getElementById("btbo").addEventListener('click',()=>{
  location.reload();
})
