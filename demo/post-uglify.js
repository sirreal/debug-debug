function log() {
    var args = Array.prototype.slice.call(arguments);
    (function(args) {
        args[0] = "%c %c" + args[0] + "%c ";
        var c = "color: #f00";
        args.splice(1, 0, c, "color: inherit");
        var index = 0, lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, function(match) {
            "%%" !== match && "%c" === match && (lastC = ++index);
        }), args.splice(lastC, 0, c);
    }).call(null, args), Function.prototype.apply.call(console.log, console, args);
}

log('This should say "Hello World!": %s', "Hello World!");