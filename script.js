function turnOn1() {
	document.getElementById("explanation-item-1").style.opacity = "1";
	document.getElementById("shape-item-1").style.transform = "scale(1)";
	console.log("turnOn1 Run")
}

function turnOff1() {
	document.getElementById("explanation-item-1").style.opacity = "0";
	document.getElementById("shape-item-1").style.transform = "scale(0)";
	console.log("turnOff1 Run");
}

function turnOn2() {
	document.getElementById("explanation-item-2").style.opacity = "1";
	document.getElementById("shape-item-2").style.transform = "scale(1)";
	console.log("turnOn2 Run");
}

function turnOff2() {
	document.getElementById("explanation-item-2").style.opacity = "0";
	document.getElementById("shape-item-2").style.transform = "scale(0)";
	console.log("turnOff2 Run");
}

function turnOn3() {
	document.getElementById("explanation-item-3").style.opacity = "1";
	document.getElementById("shape-item-3").style.transform = "scale(1)";
	console.log("turnOn3 Run");
}

function turnOff3() {
	document.getElementById("explanation-item-3").style.opacity = "0";
	document.getElementById("shape-item-3").style.transform = "scale(0)";
	console.log("turnOff3 Run");
}

document.getElementById("menu-item-1").addEventListener("mouseover", turnOn1);
document.getElementById("menu-item-1").addEventListener("mouseout", turnOff1);

document.getElementById("menu-item-2").addEventListener("mouseover", turnOn2);
document.getElementById("menu-item-2").addEventListener("mouseout", turnOff2);

document.getElementById("menu-item-3").addEventListener("mouseover", turnOn3);
document.getElementById("menu-item-3").addEventListener("mouseout", turnOff3);

function titleCircleOn() {
	var element = document.getElementById("big-circle-item-1");
	element.classList.toggle("bigger");
	console.log("titleCircleOn Run")
	
	var element = document.getElementById("image-item-1");
	element.classList.toggle("bigger");
	console.log("imageOn Run")
}


document.getElementById("heading").addEventListener("click", titleCircleOn);
