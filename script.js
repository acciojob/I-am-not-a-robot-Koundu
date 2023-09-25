//your code here
min =1;
max =5;
var num = Math.floor(Math.random() * (max - min + 1)) + min;
var imgName = "img"+num;
const container = document.getElementsByClassName("flex")[0];
const box = document.createElement("div");
box.classList.add("img");
container.appendChild(box);
console.log(container,imgName)