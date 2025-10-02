function palandromeChecker() {
    var word = document.getElementById("word").value
    console.log(word);
    // civic
    var isPalandrome = false;

    for (var i = 0; i < (word.length - 1) / 2; i++) {
        //         console.log(word[i])}
        //  console.log(word.charAt(word.length-1-i));
        var startingLetters = word[i]
        var endingLetters = word.charAt(word.length - 1 - i)

        if (startingLetters === endingLetters) {
isPalandrome = true
        }
    }
    var result=""
    if (isPalandrome) {
        result +="Its a Palandrome!"

    } else {
        result += "Its not a Palandrome!";
    }
}
document.getElementById ("result").innerHTML = result
document.getElementById ("word").value =""