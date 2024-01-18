var arr=[
    {dp:'https://tse3.mm.bing.net/th?id=OIP.1eTrA9kUvn_jbPed_sS7-QAAAA&pid=Api&P=0&h=180',
    stry:'https://i.pinimg.com/originals/68/a2/df/68a2df4a9442f8394835a5415a39c8be.jpg',
c:'E'},
    { dp:"https://tse2.mm.bing.net/th?id=OIP.M7UAHYkr5lK2Qh_ADpk9GwHaHa&pid=Api&P=0&h=180",
    stry:'https://tse4.mm.bing.net/th?id=OIP.dJJuzExBshBn3Uhe16gGIQHaHa&pid=Api&P=0&h=180',
    c:'M'},
    { dp:"https://tse2.mm.bing.net/th?id=OIP.98Y3ZsLblSLF-z22XR848gHaHa&pid=Api&P=0&h=180",
    stry:'https://i.pinimg.com/736x/d3/2f/d1/d32fd16cd951ca64d095256a1512064a.jpg',
 c:"H"},
    {dp:"https://tse2.mm.bing.net/th?id=OIP.12gUOYf0oONx_hb8MFVlFwHaJF&pid=Api&P=0&h=180",
    stry:'https://tse2.explicit.bing.net/th?id=OIP.M2oSQhb0il12XnmzjRAqNwHaJ4&pid=Api&P=0&h=180',
c:"L"},
    {dp:"https://tse4.mm.bing.net/th?id=OIP.cfIsjK2TUd7zyPWSgMfHGwHaHa&pid=Api&P=0&h=180",
    stry:"https://tse4.explicit.bing.net/th?id=OIP.g2zLWRGofBhxXm2q93IrGgAAAA&pid=Api&P=0&h=180",
 c:"K"},
    {dp:"https://tse4.mm.bing.net/th?id=OIP.vLwJgNudlZpLRUt83GzQbQHaLH&pid=Api&P=0&h=180",
  stry:"https://tse1.mm.bing.net/th?id=OIP._66D8r8U2sJEs0Hwck0q9AHaKw&pid=Api&P=0&h=180 ",
c:"Q"},
  {dp:"https://tse2.mm.bing.net/th?id=OIP.oL1Kxg2c_qXHYGLU03ZMPwAAAA&pid=Api&P=0&h=180",
  stry:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_August_08%2C_2019_(cropped).jpg ",
c:"MO"}
]
var cluter=" ";
var keep="";
var user=document.querySelector(".user");
var on=document.querySelector(".on");
arr.forEach(function(elem ,idx){
    cluter+=`<div class="s" id="s1">
    <img src="${elem.dp}" id="${idx}" class="${elem.c}">
  </div>`
})
document.querySelector(".story").innerHTML=cluter;
var s=document.querySelectorAll(".s");
s.forEach(function(child){
child.addEventListener("click",function(det){
    keep=`<img src="${arr[det.target.id].stry}" id="${det.target.id}">`;
    on.innerHTML=keep;
    user.style.display="none";
    on.style.display="block";
    setTimeout(function(){
        user.style.display="block";
        on.style.display="none";
    },3000)
})})