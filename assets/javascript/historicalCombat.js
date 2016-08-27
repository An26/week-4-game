
// Gets Link for Theme Song
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'assets/themesong.mp3');

// Theme Button
$(".themeButton").on("click", function(){
audioElement.play();
});

$(".pauseButton").on("click", function(){
	audioElement.pause();
});


var hero;
var enemy;

var characterList= [{
	id: 'lincoln',
	name: "Abraham Lincoln",
	health: 100,
	attack: 10,     		//initial attack
	counterAttack: 15,  	//2nd, and there after attacks

}, {
	id: 'einstein',
	name: "Albert Einstein",
	health: 110,
	attack: 20,
	counterAttack: 20,
}, {
	id: 'susan',
	name: "Susan B. Anthony",
	health: 120,
	attack: 30,
	counterAttack: 25,
}, {
	id: 'gandhi',
	name: "Mahatma Gandhi",
	health: 150,
	attack: 40,
	counterAttack: 30,
}];



function reset() {

}

function addClickListeners() {
	$('.character').click(assignCharacter);
	$('.attackButton').click(battle);
}


function assignCharacter() {
	if (hero && enemy) return;
		var html = "<h3>To begin, pick your character!</p>"
		document.querySelector('.messageUser').innerHTML = html;
	if (hero) {
		enemy = $(this).appendTo('#opponent');
		var html = "<h3>You're ready to fight!</h3>"
		document.querySelector('.messageUser').innerHTML = html;
		$('#attackButton').show();
		$(this).removeClass("neutral"); 
	} else {
		hero = $(this).appendTo('#yourCharacter');
		var html = "<h3>Next, Pick Your Opponent!</h3>"
		document.querySelector('.messageUser').innerHTML = html;
		$(this).removeClass("neutral"); 
		$('.neutral').appendTo('.otherEnemies');
	}
}

function buildCharacters() {
	for (var i = 0; i < characterList.length; i++) {
		var currentCharacter = characterList[i];	 
		var newDiv = $("<div class='character neutral' id ="+ currentCharacter.id +"></div>").appendTo("#characterList");
		$("<div class='imgName'></div>").html(currentCharacter.name).appendTo(newDiv);
		$("<div class='imgHealth' id ='" + currentCharacter.health + "'></div>").html("HealthPoint: " + currentCharacter.health).appendTo(newDiv);
}
	} 

function battle (){
	console.log("attacking");




}

$(document).ready(function(){
	buildCharacters();
	addClickListeners();
	assignCharacter();
	battle();
});