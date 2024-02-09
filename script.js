
let outerContainer=document.querySelector(".slider_container");
let inner_slider=document.querySelector(".inner_slider");

let pressed=false;
let startx;
let  x;


outerContainer.addEventListener('mousedown',(e)=>{
  pressed=true;
  startx=e.offsetX-inner_slider.offsetLeft;
  outerContainer.style.cursor="grabbing";
})

outerContainer.addEventListener('mouseenter',(e)=>{
  outerContainer.style.cursor='grab';
})


outerContainer.addEventListener('mouseup',(e)=>{
  outerContainer.style.cursor='grab';
})

window.addEventListener('mouseup',()=>{
  pressed=false;
})

// console.log("hhh");
outerContainer.addEventListener('mousemove',(e)=>{
  if(!pressed)return;

  e.preventDefault();

  x=e.offsetX;
  console.log("this is e.offetX",x);
  inner_slider.style.left=`${x-startx}px`;
  console.log("hhh");
  console.log(inner_slider.style.left);
   checkboundry();
})





window.onscroll = function () {
    myFunction();
  };
  
  function myFunction() {
    if (document.documentElement.scrollTop > 10) {
      document.querySelector(".nav-div").classList.add("onscroll");
    } else {
      document
        .querySelector(".nav-div")
        .classList.remove("onscroll");
    }
  }












  