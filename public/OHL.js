var button = document.getElementById("button");

var marks = ["John F Kennedy", "Martin Luther King", "Olof Palme", "Johan Lennon", "Esor"];
var i = 1;

function addMark(mark) {
	var newMark = prompt("Who pissed you off?");
	
	if (newMark !== null) {
		marks.push(newMark);
		var div = document.createElement("div");
		div.innerHTML = i+". "+newMark;
		i++;
		addClicker(div);
		mainwrap.appendChild(div);
	}
}

function addClicker(div) {
	div.addEventListener("click", function() {
		if(this.style.textDecoration === "line-through") {
			this.style.textDecoration = "";
		}else {
			this.style.textDecoration = "line-through";
			var audio = new Audio('shot.mp3');
			audio.play();
		}	
	})
	mouseOver(div)
}

function mouseOver(div) {
	div.addEventListener("mouseover", function () {
		if(this.style.textDecoration !== "line-through") {
			var audio = new Audio('load.mp3');
			audio.play();
		}
	})
}

marks.forEach(function(item) {
	var div = document.createElement("div");
	div.innerHTML = i+". "+item;
	i++;
	addClicker(div)
	mainwrap.appendChild(div)
})