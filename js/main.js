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
		alert("You don't have a match, yet.");
	}
}

// precondition: card unflipped
var flipCard = function (cardId) {
	// get card to play
	var flippedCard = cards[cardId];
	// add card to "in play"
	cardsInPlay.push(flippedCard.rank);
	// give feedback to user
	console.log("User flipped " + flippedCard.rank);
	console.log("Card suit is " + flippedCard.suit);
	console.log("Card image is " + flippedCard.cardImage);
	checkForMatch();
}

// simulated user actions
flipCard(0);
flipCard(1);
