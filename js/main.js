// card items
var cards, cardsInPlay;
var cardOne, cardTwo;
cards = ["queen", "queen", "king", "king"];
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
	cardsInPlay.push(flippedCard);
	// give feedback to user
	console.log("User flipped " + flippedCard);
	checkForMatch();
}

// simulated user actions
flipCard(0);
flipCard(1);
