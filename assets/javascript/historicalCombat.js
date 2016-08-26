var hero;
var enemy;

var characterList= [{
	id: 'lincoln'
}, {
	id: 'einstein'
}, {
	id: 'susan'
}, {
	id: 'gandhi'
}];

function buildCharacters() {
	for (var i = 0; i < characterList.length; i++) {
		var currentCharacter = characterList[i];
		$("#characterList").append('<div class ="character">text</div>');
	}
}

// function addClickListeners() {
// 	$('.character').click(selectCharacter);
// }

// function selectCharacter() {
//  console.log(this);
// }

buildCharacters();
// addClickListeners();
// selectCharacter();