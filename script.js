let button = document.getElementById("btn");
let menu = document.getElementById("sidebar");
button.addEventListener("click", function (e) {
    e.stopPropagation();
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
menu.addEventListener("click", function (event) {
    event.stopPropagation();
});
document.addEventListener("click", function () {
    menu.style.display = "none";
});

const menu1 = document.getElementsByClassName("header_right")[0];
const menu2 = document.getElementsByClassName("header_left_nav")[0];
const menu3 = document.querySelector(".top_header .header_logo");
const menu4 = document.getElementById("menu_toggle");
menu4.addEventListener("click", function (event1) {
        event1.stopPropagation();
        if (menu1.style.display === "flex") {
            menu1.style.display = "none";
            menu2.style.display = "none";
            menu3.style.display = "block";
        } else {
            menu1.style.display = "flex";
            menu2.style.display = "flex";
            menu3.style.display = "none";
        };
        });
    
menu1.addEventListener('click', function(event2){
  event2.stopPropagation();
});
menu2.addEventListener('click', function(event3){
  event3.stopPropagation();
});
menu3.addEventListener('click', function(event4){
  event4.stopPropagation();
});
document.addEventListener("click", function () {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "block";
  
});
