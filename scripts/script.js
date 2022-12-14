var buttonMenu = document.querySelector("header section:nth-of-type(2) button");

buttonMenu.addEventListener("click", openMenu);

function openMenu() {
    var navElement = document.querySelector("header nav");
    console.log(navElement);

    navElement.classList.toggle("toonMenu");
}



