let all = document.querySelector("*");
let header = document.createElement("header");
document.body.append(header);
let logo = document.createElement("a");
logo.setAttribute("href", "#");
logo.innerHTML = "Mohamed";
header.append(logo);
let menu = document.createElement("ul");
header.append(menu);
let a = [];
let li = [];
for (let i = 1; i <= 4; i++) {
  li[i] = document.createElement("li");
  a[i] = document.createElement("a");
  a[i].setAttribute("href", "#");
  a[i].style = "text-decoration:none;color:black;";
  menu.append(a[i]);
  a[i].append(li[i]);
}
li[1].innerHTML = "Home";
li[2].innerHTML = "About";
li[3].innerHTML = "Service";
li[4].innerHTML = "Contact";
let container = document.createElement("div");
document.body.append(container);

let products = [];
let title = [];
let des = [];

for (let i = 1; i <= 15; i++) {
  products[i] =document.createElement("div");
  container.append(products[i])
  products[i].style = "text-align:center;width:30%;background-color:white";
  title[i]= document.createElement("p");
  des[i]= document.createElement("p");
  title[i].innerHTML = `${i}`;
  des[i].innerHTML = `Product`;
  products[i].append(title[i]);
  products[i].append(des[i]);
}
let footer = document.createElement("footer")
footer.innerHTML = "Copyright 2023"
footer.style = "font-size:16px;text-align:center;background-color:green;color:white;padding:23px"
document.body.append(footer)
// start styling
all.style = "box-sizing:border-box;padding:0;margin:0;";
document.body.style = "overflow-y:hidden;height:100vh;";
header.style =
  "padding: 10px;display:flex;align-items:center;justify-content:space-between;";
logo.style =
  "color: green;font-weight:bold;font-size:20px;text-decoration: none;";
menu.style = "list-style:none;display:flex;gap:10px";
container.style =
  "background-color:#ececec;padding:10px;display:flex;flex-wrap:wrap;justify-content:center;gap:10px";
// end styling
