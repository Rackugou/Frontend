// JavaScript Document
let menuButton = document.querySelector("header > button:nth-of-type(1)");
let menu = document.querySelector("header nav:first-of-type")

menuButton.onclick = () => {
    menu.classList.toggle("toonMenu");
    
};