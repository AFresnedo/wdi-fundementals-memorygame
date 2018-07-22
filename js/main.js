// playable card list
var cards, cardsInPlay;
cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
]

cardsInPlay = [];

// game logic

// function to determine if the flipped cards are a match
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("The first two cards did not match.");
	}
}

// precondition (assumed handled by event listener): card unflipped, called by correct card
var flipCard = function (cardId) {
	//
	// flip the card
	// 
	// get card to play
	var flippedCard = cards[this.getAttribute('data-id')];
	// add card to "in play"
	cardsInPlay.push(flippedCard.rank);
	// give feedback to user
	console.log("User flipped " + flippedCard.rank);
	console.log("Card suit is " + flippedCard.suit);
	this.setAttribute('src', flippedCard.cardImage);
	//
	// after card has been flipped, check if a match has been found yet
	//
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

var createBoard = function () {
	// place every card, face down, on the board
	for (var i = 0; i < cards.length; i++) {
		//
		// setup the card
		// 
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		// note: 'data-NAME' attributes are meant to store data about an element that is not tied to a style
		//    generally, i assume this is used for JS...it's relevant because it occupies the same space (attributes)
		//    as css related data
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		//
		// add the card to the board
		// 
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//
// start the game
//
// create the board
createBoard();
