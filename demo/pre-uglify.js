var index = 0;
var whereIsTheLetterC = 0;

[ 'a', 'b', 'c' ].forEach( function( letter ) {
	index++;
	if ( 'c' === letter ) {
		whereIsTheLetterC = index;
	}
} );

console.log( 'This letter "c" is number 3: %d', whereIsTheLetterC );
