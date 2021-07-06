'''
Write deck JSON file
'''
import json

descriptions = {
	'Ace'  : 'Waterfall',
	'2'    : 'You',
	'3'    : 'Me',
	'4'    : 'Floor',
	'5'    : 'Guys',
	'6'    : 'Chicks',
	'7'    : 'Heaven',
	'8'    : 'Mate',
	'9'    : 'Rhyme',
	'10'   : 'Categories',
	'Jack' : 'Never have I ever',
	'Queen': 'Question Master',
	'King' : 'Rule maker'
}

if __name__ == '__main__':
	names = [
		'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10',
		'Jack', 'Queen', 'King'
	]
	suits = [ 'Hearts', 'Diamonds', 'Clubs', 'Spades' ]
	deck  = { 'cards': [], 'counts': {} }
	
	for suit in suits:
		deck[ 'counts' ][ suit ] = 4
	
	for name in names:
		for suit in suits:
			deck[ 'cards' ].append(
				{
				'name'       : name,
				'suit'       : suit,
				'description': descriptions[ name ]
				} )

	with open( 'deck.json', 'w' ) as f:
		json.dump( deck, f )

