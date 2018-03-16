/** @format */

function log() {
	var args = Array.prototype.slice.call( arguments );

	function formatArgs( args ) {
		args[ 0 ] = '%c %c' + args[ 0 ] + '%c ';

		var c = 'color: #f00';
		args.splice( 1, 0, c, 'color: inherit' );

		// the final "%c" is somewhat tricky, because there could be other
		// arguments passed either before or after the %c, so we need to
		// figure out the correct index to insert the CSS into
		var index = 0;
		var lastC = 0;
		args[ 0 ].replace( /%[a-zA-Z%]/g, function( match ) {
			if ( '%%' === match ) return;
			index++;
			if ( '%c' === match ) {
				// we only are interested in the *last* %c
				// (the user may have provided their own)
				lastC = index;
			}
		} );

		args.splice( lastC, 0, c );
	}
	formatArgs.call( null, args );
	Function.prototype.apply.call( console.log, console, args );
}

log( 'This should say "Hello World!": %s', 'Hello World!' );
