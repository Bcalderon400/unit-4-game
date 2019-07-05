var random_result;
var win;
var lose;


for (i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12);
    console.log(random);

    var crystal = $("<div>");
    crystal.attr("class", 'crystal')
    $(".crystals").append(crystal);

}