



var hero;
var enemy;

var characterList= [{
	id: 'lincoln',
	name: "Abraham Lincoln",
	health: 100,
	attack: 10,
	counterAttack: 15,

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
}


function assignCharacter() {
	if (hero && enemy) return;
		var html = "<p>Pick Your Character!</p>"
		document.querySelector('.messageUser').innerHTML = html;
		

	if (hero) {
		enemy = $(this).appendTo('#opponent');
		var html = "<p>Your Ready to Fight!</p>"
		document.querySelector('.messageUser').innerHTML = html;
		$('#attackButton').show();
		$(this).removeClass("neutral"); 


	} else {
		hero = $(this).appendTo('#yourCharacter');
		var html = "<p>Pick Your Opponent!</p>"
		document.querySelector('.messageUser').innerHTML = html;
		$(this).removeClass("neutral"); 
		$('.neutral').appendTo('.otherEnemies');
	}
}

function buildCharacters() {
	for (var i = 0; i < characterList.length; i++) {
		var currentCharacter = characterList[i];
		var nameDiv = $("#characterList").append('<div class ="character neutral" id = '+ currentCharacter.id +'></div>');
		 $("<div class='imgName'></div>").html(currentCharacter.name).appendTo(nameDiv);
		 $("<div class='imgHealth'></div>").html("HP: " + currentCharacter.health).appendTo(nameDiv);
	} 
}

$(document).ready(function(){
	buildCharacters();
	addClickListeners();
	assignCharacter();
});