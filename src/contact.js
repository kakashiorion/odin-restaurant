export default function showContact() {

    let contactDiv = document.createElement("div");
    contactDiv.innerHTML = "Contact Tab";
    contactDiv.style.padding = "50px";
    contactDiv.style.color = "white";
    let content = document.getElementById("content");
    content.removeChild(content.lastChild);
    content.appendChild(contactDiv);
}