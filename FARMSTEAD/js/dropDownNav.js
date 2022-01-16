let openIcon = document.getElementById("openIcon");
let navbarList = document.getElementById("dropNav");

openIcon.addEventListener("click", function(){
    
  navbarList.classList.toggle("newStyle");
  navbarList.style.display = "block";

}) 




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header-bg").style.padding = "0px";
    // document.getElementById("logo").style.fontSize = "30px";

    document.getElementById("header-bg").style.backgroundColor = "white";

  } else {
    document.getElementById("header-bg").style.padding = "10px";
    // document.getElementById("logo").style.fontSize = "40px";

    document.getElementById("header-bg").style.backgroundColor = "transparent";

  }
}