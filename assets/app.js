$(".js-btn-step-1").on("click", function (event) {
    $(".calculate-content-wrap #step-1").hide();
    $(".calculate-content-wrap #step-2").show();
});

$(".js-btn-step-2").on("click", function (event) {
    $(".calculate-content-wrap #step-2").hide();
    $(".calculate-content-wrap #step-3").show();
});

$(".js-btn-step-back").on("click", function (event) {
    $(".calculate-content-wrap #step-1").show();
    $(".calculate-content-wrap #step-2").hide();
});

$(".calculate-modal").on("hidden.bs.modal", function () {
    $(".calculate-content-wrap #step-1").show();
    $(".calculate-content-wrap #step-2").hide();
    $(".calculate-content-wrap #step-3").hide();
});