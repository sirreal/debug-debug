var index = 0, whereIsTheLetterC = 0;

[ "a", "b", "c" ].forEach(function(letter) {
    "c" === letter && (whereIsTheLetterC = ++index);
}), console.log('This letter "c" is number 3: %d', whereIsTheLetterC);