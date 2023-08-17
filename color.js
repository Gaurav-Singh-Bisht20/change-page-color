const h1=document.querySelector(".heading");
const body=document.body;
const currentColor=document.querySelector(".color");
const button=document.querySelector(".btn");
const randomColorGenerator=()=>{
   const red= Math.floor(Math.random()*256);
   const green= Math.floor(Math.random()*256);
   const blue= Math.floor(Math.random()*256);
   const color=`rgb(${red},${green} ,${blue})`;
   return color;
}

button.addEventListener("click",()=>{
    const randomColor=randomColorGenerator();
    body.style.backgroundColor=randomColor;
    currentColor.textContent=randomColor;
    console.log("im clicked");
});