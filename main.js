(()=>{"use strict";function e(){let e=document.createElement("div");e.innerHTML="Home Tab",e.style.padding="50px",e.style.color="white";let t=document.getElementById("content");t.removeChild(t.lastChild),t.appendChild(e)}let t=document.getElementById("content");t.style.backgroundColor="black";let l=document.createElement("img");l.classList.add("heroImage"),l.src="../src/rest.jpeg",l.style.margin="0px auto",l.style.padding="10px",l.style.display="flex",l.style.height="24vh",l.style.backgroundColor="black";let n=document.createElement("div");n.classList.add("heroDiv"),n.innerHTML="Fung's Restaurant",n.style.display="flex",n.style.margin="0px auto",n.style.paddingBottom="10px",n.style.justifyContent="center",n.style.color="white",n.style.fontFamily="Verdana",n.style.fontSize="8vh",t.appendChild(l),t.appendChild(n);let d=document.createElement("ul");d.classList.add("navList");let i=document.createElement("li");i.innerHTML="HOME",i.style.color="white",i.style.display="inline",i.style.padding="10px 20px",i.addEventListener("click",e),i.addEventListener("mouseover",(()=>i.style.color="red")),i.addEventListener("mouseout",(()=>i.style.color="white"));let o=document.createElement("li");o.innerHTML="MENU",o.style.color="white",o.style.display="inline",o.style.padding="10px 20px",o.addEventListener("click",(function(){let e=document.createElement("div");e.innerHTML="Menu Tab",e.style.padding="50px",e.style.color="white";let t=document.getElementById("content");t.removeChild(t.lastChild),t.appendChild(e)})),o.addEventListener("mouseover",(()=>o.style.color="red")),o.addEventListener("mouseout",(()=>o.style.color="white"));let s=document.createElement("li");s.innerHTML="CONTACT",s.style.color="white",s.style.display="inline",s.style.padding="10px 20px",s.addEventListener("click",(function(){let e=document.createElement("div");e.innerHTML="Contact Tab",e.style.padding="50px",e.style.color="white";let t=document.getElementById("content");t.removeChild(t.lastChild),t.appendChild(e)})),s.addEventListener("mouseover",(()=>{s.style.color="red"})),s.addEventListener("mouseout",(()=>s.style.color="white")),d.appendChild(i),d.appendChild(o),d.appendChild(s),d.style.listStyleType="none",d.style.display="flex",d.style.justifyContent="center",d.style.paddingInlineStart="0px",t.appendChild(d);let a=document.createElement("div");t.appendChild(a),e(),console.log("Hello!")})();