// JavaScript Document
let menuButton = document.querySelector("header > button:nth-of-type(1)");
let menu = document.querySelector("header nav:first-of-type");
let menuContent = document.querySelector("header > button:nth-of-type(1) img");

let card1 = document.querySelector("main > section:first-of-type ul li:nth-child(1)");
let card2 = document.querySelector("main > section:first-of-type ul li:nth-child(2)");
let buttonLinks = document.querySelector("main section:nth-of-type(1) > button:nth-of-type(2)");
let buttonRechts = document.querySelector("main section:nth-of-type(1) > button:nth-of-type(3)");
let bal1 = document.querySelector("main section:nth-of-type(1) > img:nth-of-type(1)");
let bal2 = document.querySelector("main section:nth-of-type(1) > img:nth-of-type(2)");

menuButton.onclick = () => {
    menu.classList.toggle("toonMenu");
    if (menuContent.src.includes("/images/menu.png")){
        menuContent.src = "./images/close_menu.png";
}   else {
        menuContent.src = "./images/menu.png";
}   
};

buttonLinks.onclick = () => {
        card1.classList.toggle("naarLinks");
        card2.classList.toggle("naarLinks");
        
        
        if (card1.classList.contains("naarLinks")){
                bal1.src = "./images/inactive_ball.png";
                bal2.src = "./images/active_ball.png";
                card2.removeAttribute("inert")
                card1.setAttribute("inert", true)
        } else{
                card1.removeAttribute("inert")
                card2.setAttribute("inert", true)
                bal1.src = "./images/active_ball.png";
                bal2.src = "./images/inactive_ball.png";
        }
}

buttonRechts.onclick = () => {
        card1.classList.toggle("naarLinks");
        card2.classList.toggle("naarLinks");

        if (card1.classList.contains("naarLinks")){
                bal1.src = "./images/inactive_ball.png";
                bal2.src = "./images/active_ball.png";
                card2.removeAttribute("inert")
                card1.setAttribute("inert", true)
        } else{
                card1.removeAttribute("inert")
                card2.setAttribute("inert", true)
                bal1.src = "./images/active_ball.png";
                bal2.src = "./images/inactive_ball.png";
        }
}