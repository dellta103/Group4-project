var light = document.getElementById("mode-light");
var dark = document.getElementById("mode-dark");

var target = document.getElementById("changeColorTest");

light.addEventListener("click", () => {
    target.className = "container testLight";
    light.className = "d-none";
    dark.className = "fa fa-moon";

})
dark.addEventListener("click", () => {
    target.className = "container testDark";
    dark.className = "d-none";
    light.className = "fa fa-sun";

})