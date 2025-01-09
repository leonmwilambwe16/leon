let menuList = document.getElementById("menuList")
menuList.style.maxHeight="0px";

function toggleMenu(){
  if(menuList.style.maxHeight=="0px"){
    menuList.style.maxHeight="300px";
  }else{
    menuList.style.maxHeight="0px";
  }
}


let btndiva = document.getElementById("btn-diva");
let btndivb = document.getElementById("btn-divb");
let divaL = document.getElementById("diva");
let divbL = document.getElementById("divb");

btndiva.addEventListener('click',()=>{
  divaL.style.display='block';
  divbL.style.display='none';
});

btndivb.addEventListener('click',()=>{
  divaL.style.display='none';
  divbL.style.display='block';
});


let items = document.querySelectorAll('ul li');
items.forEach((item) =>{
  item.addEventListener("click",()=>{
    document.querySelector("li.active-link").classList.remove("active-link");
    item.classList.add("active-link");
  })
});
