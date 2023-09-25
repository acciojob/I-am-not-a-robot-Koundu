//your code here
min =1;
max =5;
var num = Math.floor(Math.random() * (max - min + 1)) + min;
const verifyBtn = document.querySelector("#visible");
const resetBtn = document.querySelector("button")
const para = document.getElementById("para");
var clicked=0;
var selected=0;
var imgName = "img"+num;
const container = document.getElementsByClassName("flex")[0];
const box = document.createElement("div");
box.classList.add("img");
box.classList.add(`${imgName}`);
container.appendChild(box);

box.addEventListener('click',()=>{
	box.classList.add("selected");
	selected = num;
	console.log(num);
})

var isSelected=false;
var select = document.getElementsByClassName("img");
for(let i=0;i<select.length-1;i++){
	select[i].addEventListener('click',()=>{
		if(isSelected == false){
		select[i].classList.add("selected");
		isSelected = true;
		clicked = (i+1);
		console.log(i+1);
		}
	})
}

verifyBtn.addEventListener('click',()=>{
	if(isSelected === true){
		verifyBtn.style.display = "none";
	if(selected === clicked && isSelected === true){
		para.innerHTML += "You are a human. Congratulations!.";
	}else{
		para.innerHTML += "We can't verify you as a human. You selected the non-identical tiles.";
	}
	}else{
		alert("Please Selecte the Images")
	}
})

resetBtn.addEventListener('click',()=>{
		location.reload();
})