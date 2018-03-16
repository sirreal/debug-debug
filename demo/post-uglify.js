var index = 0, count = 0;

"a b".replace(/[ab]/g, function(match) {
    "b" === match && (count = ++index);
}), console.log("This should be 2: %d", count);