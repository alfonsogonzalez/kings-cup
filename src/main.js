//sdfsdf
//

/*
This is a very ugly thing to do. Ideally this would
be in a JSON file and would be loaded by the program
instead of hard coded like this (at the very least it
should be formatted nicely, but yolo)
*/
var deck = {"cards": [{"name": "Ace", "suit": "Hearts", "description": "Waterfall"}, {"name": "Ace", "suit": "Diamonds", "description": "Waterfall"}, {"name": "Ace", "suit": "Clubs", "description": "Waterfall"}, {"name": "Ace", "suit": "Spades", "description": "Waterfall"}, {"name": "2", "suit": "Hearts", "description": "You"}, {"name": "2", "suit": "Diamonds", "description": "You"}, {"name": "2", "suit": "Clubs", "description": "You"}, {"name": "2", "suit": "Spades", "description": "You"}, {"name": "3", "suit": "Hearts", "description": "Me"}, {"name": "3", "suit": "Diamonds", "description": "Me"}, {"name": "3", "suit": "Clubs", "description": "Me"}, {"name": "3", "suit": "Spades", "description": "Me"}, {"name": "4", "suit": "Hearts", "description": "Floor"}, {"name": "4", "suit": "Diamonds", "description": "Floor"}, {"name": "4", "suit": "Clubs", "description": "Floor"}, {"name": "4", "suit": "Spades", "description": "Floor"}, {"name": "5", "suit": "Hearts", "description": "Guys"}, {"name": "5", "suit": "Diamonds", "description": "Guys"}, {"name": "5", "suit": "Clubs", "description": "Guys"}, {"name": "5", "suit": "Spades", "description": "Guys"}, {"name": "6", "suit": "Hearts", "description": "Chicks"}, {"name": "6", "suit": "Diamonds", "description": "Chicks"}, {"name": "6", "suit": "Clubs", "description": "Chicks"}, {"name": "6", "suit": "Spades", "description": "Chicks"}, {"name": "7", "suit": "Hearts", "description": "Heaven"}, {"name": "7", "suit": "Diamonds", "description": "Heaven"}, {"name": "7", "suit": "Clubs", "description": "Heaven"}, {"name": "7", "suit": "Spades", "description": "Heaven"}, {"name": "8", "suit": "Hearts", "description": "Mate"}, {"name": "8", "suit": "Diamonds", "description": "Mate"}, {"name": "8", "suit": "Clubs", "description": "Mate"}, {"name": "8", "suit": "Spades", "description": "Mate"}, {"name": "9", "suit": "Hearts", "description": "Rhyme"}, {"name": "9", "suit": "Diamonds", "description": "Rhyme"}, {"name": "9", "suit": "Clubs", "description": "Rhyme"}, {"name": "9", "suit": "Spades", "description": "Rhyme"}, {"name": "10", "suit": "Hearts", "description": "Categories"}, {"name": "10", "suit": "Diamonds", "description": "Categories"}, {"name": "10", "suit": "Clubs", "description": "Categories"}, {"name": "10", "suit": "Spades", "description": "Categories"}, {"name": "Jack", "suit": "Hearts", "description": "Never have I ever"}, {"name": "Jack", "suit": "Diamonds", "description": "Never have I ever"}, {"name": "Jack", "suit": "Clubs", "description": "Never have I ever"}, {"name": "Jack", "suit": "Spades", "description": "Never have I ever"}, {"name": "Queen", "suit": "Hearts", "description": "Question Master"}, {"name": "Queen", "suit": "Diamonds", "description": "Question Master"}, {"name": "Queen", "suit": "Clubs", "description": "Question Master"}, {"name": "Queen", "suit": "Spades", "description": "Question Master"}, {"name": "King", "suit": "Hearts", "description": "Rule maker"}, {"name": "King", "suit": "Diamonds", "description": "Rule maker"}, {"name": "King", "suit": "Clubs", "description": "Rule maker"}, {"name": "King", "suit": "Spades", "description": "Rule maker"}], "counts": {"Hearts": 4, "Diamonds": 4, "Clubs": 4, "Spades": 4}};

function shuffleArr( array ){
	/*
	Shuffle the elements of an array (data type doesn't matter)
	*/
    for ( var i = array.length - 1; i > 0; i-- ) {
        var rand = Math.floor( Math.random() * ( i + 1 ) );
        [ array[ i ], array[ rand ] ] = [ array[ rand ], array[ i ] ]
    }
}

// Shuffle the deck
shuffleArr( deck[ 'cards' ] );

// draw the first card automatically
draw_card_function();

// attach draw_card_function to draw_card button click
document.getElementById( "draw_card" ).addEventListener( "click", draw_card_function );


function draw_card_function() {
	var card = deck[ 'cards' ][ 0 ];
	var name = card[ 'name' ].concat( ' of ', card[ 'suit' ] );
	var img  = 'imgs/'.concat( card[ 'name' ], '_', card[ 'suit' ], '.png' )

	document.getElementById( "current_card_name" ).innerText = name;
	document.getElementById( "current_card_description" ).innerText = card[ 'description' ];
	document.getElementById( "current_card_img" ).src = img;

	// remove first element of the cards array (this was the card that was drawn)
	deck[ 'cards' ].shift();
}