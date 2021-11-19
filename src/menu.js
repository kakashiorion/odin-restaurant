export default function showMenu() {

    let menuDiv = document.createElement("div");
    menuDiv.innerHTML = "Menu Tab";
    menuDiv.style.padding = "50px";
    menuDiv.style.color = "white";
    let content = document.getElementById("content");
    content.removeChild(content.lastChild);
    content.appendChild(menuDiv);
}


