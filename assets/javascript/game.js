var random_result;
var win = 0;
var lose = 0;
var counter = 0;

var min = 19;
var max = 120;

random_result = Math.floor(Math.random() * (max - min) + min);
//console.log(random_result);
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

$(".crystal").on('click', function() {
    var crystalValue = parseInt($(this).attr('value-random'));

    counter += crystalValue;

    console.log(counter)


    if (counter > random_result) {
        loss--;
        $(".loss").html("Losses: " + loss);
    } else if (counter === random_result) {
        win++;
        $(".win").html("Wins: " + win);
    }
})