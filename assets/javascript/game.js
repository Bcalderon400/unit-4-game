var random_result;
var win = 0;
var loss = 0;
var counter = 0;

var min = 19;
var max = 120;



var resetStart = function() {

    $(".crystals").empty();

    random_result = Math.floor(Math.random() * (max - min) + min);

    $("#numToguess").html('Number to guess: ' + random_result)

    for (i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);



        var crystal = $("<div>");
        crystal.attr("class", 'crystal')
        crystal.attr("value-random", random)

        crystal.html(random);
        $(".crystals").append(crystal);

    }
}
resetStart();


$(document).on('click', ".crystal", function() {
    var crystalValue = parseInt($(this).attr('value-random'));

    counter += crystalValue;
    console.log(counter)

    if (counter > random_result) {

        loss--;

        $(".loss").html("Losses: " + loss);

        counter = 0;

        alert("You Lost!")

        resetStart();

    } else if (counter === random_result) {

        win++;

        $(".win").html("Wins: " + win);

        counter = 0;

        alert("You Won!");

        resetStart();
    }
})