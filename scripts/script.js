// JavaScript Document
let menuButton = document.querySelector("header > button:nth-of-type(1)");
let menu = document.querySelector("header nav:first-of-type");
let menuContent = document.querySelector("header > button:nth-of-type(1) img");

menuButton.onclick = () => {
    menu.classList.toggle("toonMenu");
    if (menuContent.src.includes("/images/menu.png")){
        menuContent.src = "/images/close_menu.png";
}   else {
        menuContent.src = "/images/menu.png";
}   
};