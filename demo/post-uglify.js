function log() {
    var args = Array.prototype.slice.call(arguments);
    (function(args) {
        args[0] = "%a %b " + args[0];
        var index = 0, countPercents = 0;
        args[0].replace(/%[a-zA-z]/g, function(match) {
            "__DOESNOTMATCH__" !== match && "%b" === match && (countPercents = ++index);
        }), args.splice(args.length, 0, countPercents);
    }).call(null, args), Function.prototype.apply.call(console.log, console, args);
}

log("This should be 2: %d");