$(function () {

    var currentIndex = 0;

    var order = [
        'page-index', 'page-aanbod', 'page-tickets', 'page-stoelen-selecteren', 'page-overzicht', 'page-betalen', 'page-bedankt'
    ];

    $("#" + order[0]).show();

    $(".button").click(function () {
        $(".slider-page").hide();
        currentIndex++;
        $("#" + order[currentIndex]).show();
    })

})