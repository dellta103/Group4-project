// Dark theme
document.getElementById("switchButton").onclick = function () {
  document.getElementById("myBody").classList.toggle("dark");
};

// Scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header_contain").style.padding = "15px 10px";
  } else {
    document.getElementById("header_contain").style.padding = "25px 10px";
  }
}
