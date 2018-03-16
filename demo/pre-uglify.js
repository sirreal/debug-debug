/** @format */

function log() {
	var args = Array.prototype.slice.call( arguments );

	function countPercentSigns( args ) {
		args[ 0 ] = '%a %b ' + args[ 0 ];

		var index = 0;
		var countPercents = 0;
		args[ 0 ].replace( /%[a-zA-z]/g, function( match ) {
			if ( '__DOESNOTMATCH__' === match ) return;
			index++;
			if ( '%b' === match ) {
				countPercents = index;
			}
		} );

		args.splice( args.length, 0, countPercents );
	}
	countPercentSigns.call( null, args );
	Function.prototype.apply.call( console.log, console, args );
}

log( 'This should be 2: %d' );
