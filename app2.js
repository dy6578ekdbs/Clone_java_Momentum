const title = document.querySelector("h1");

console.log(title);

function handTitleClick(){
  

    title.classList.toggle("clicked");

}


title.addEventListener("click",  handTitleClick);


