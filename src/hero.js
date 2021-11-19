import showHome from './home.js';
import showMenu from './menu.js';
import showContact from './contact.js';

let content = document.getElementById("content");
content.style.backgroundColor = "black";


let heroImage = document.createElement("img");
heroImage.classList.add("heroImage");
heroImage.src = "../src/rest.jpeg";
heroImage.style.margin = "0px auto";
heroImage.style.padding = "10px";
heroImage.style.display = "flex";
heroImage.style.height = "24vh";
heroImage.style.backgroundColor = "black";


let heroDiv = document.createElement("div");
heroDiv.classList.add("heroDiv");
heroDiv.innerHTML = "Fung's Restaurant";
heroDiv.style.display = "flex";
heroDiv.style.margin = "0px auto";
heroDiv.style.paddingBottom = "10px";
heroDiv.style.justifyContent = "center";
heroDiv.style.color = "white";
heroDiv.style.fontFamily = "Verdana";
heroDiv.style.fontSize = "8vh";

content.appendChild(heroImage)
content.appendChild(heroDiv);

let navList = document.createElement("ul");
navList.classList.add("navList");

let nav1 = document.createElement("li");
nav1.innerHTML = "HOME";
nav1.style.color = "white";
nav1.style.display = "inline";
nav1.style.padding = "10px 20px";
nav1.addEventListener("click", showHome);
nav1.addEventListener("mouseover", () => nav1.style.color = "red");
nav1.addEventListener("mouseout", () => nav1.style.color = "white");

let nav2 = document.createElement("li");
nav2.innerHTML = "MENU";
nav2.style.color = "white";
nav2.style.display = "inline";
nav2.style.padding = "10px 20px";
nav2.addEventListener("click", showMenu);
nav2.addEventListener("mouseover", () => nav2.style.color = "red");
nav2.addEventListener("mouseout", () => nav2.style.color = "white");

let nav3 = document.createElement("li");
nav3.innerHTML = "CONTACT";
nav3.style.color = "white";
nav3.style.display = "inline";
nav3.style.padding = "10px 20px";
nav3.addEventListener("click", showContact);
nav3.addEventListener("mouseover", () => {
    nav3.style.color = "red";
});
nav3.addEventListener("mouseout", () => nav3.style.color = "white");



navList.appendChild(nav1);
navList.appendChild(nav2);
navList.appendChild(nav3);
navList.style.listStyleType = "none";
navList.style.display = "flex";
navList.style.justifyContent = "center";
navList.style.paddingInlineStart = "0px";

content.appendChild(navList);

let extraDiv = document.createElement("div");
content.appendChild(extraDiv);
showHome();