export default function showHome() {

    let homeDiv = document.createElement("div");
    homeDiv.innerHTML = "Home Tab";
    homeDiv.style.padding = "50px";
    homeDiv.style.color = "white";
    let content = document.getElementById("content");
    content.removeChild(content.lastChild);
    content.appendChild(homeDiv);
}

