var random_result;
var win;
var lose;

var min = 19;
var max = 120;

random_result = Math.floor(Math.random() * (max - min) + min);
console.log(random_result);
$("#numToguess").html('Number to guess: ', )

for (i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12);
    console.log(random);

    var crystal = $("<div>");
    crystal.attr("class", 'crystal')
    crystal.attr("value-random", random)
    $(".crystals").append(crystal);

}