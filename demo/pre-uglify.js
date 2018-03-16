/** @format */

var index = 0;
var count = 0;
'a b'.replace( /[ab]/g, function( match ) {
	index++;
	if ( 'b' === match ) {
		count = index;
	}
} );
console.log( 'This should be 2: %d', count );
