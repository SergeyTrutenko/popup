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

$(".calculate-content-wrap input[name='type']").on("change", function (e){
    if($(this).hasClass("js-radio-common")){
        $(".calculate-content-wrap input.js-check-inv").prop("disabled", true)
        $(".calculate-content-wrap input.js-check-inv").prop("checked",false)
    }
    else {
        $(".calculate-content-wrap input.js-check-inv").prop("disabled", false)
    }

});

$(document).on("change", ".calculate-content-wrap #step-3", function() {
    var names = {};
    $('.calculate-content-wrap #step-3 :radio').each(function() {
        names[$(this).attr('name')] = true;
    });

    var count = 0;
    $.each(names, function() {
        count++;
    });

    if ($('.calculate-content-wrap #step-3 :radio:checked').length === count) {
        $(".calculate-content-wrap .form-btn").prop("disabled", !this.checkValidity())
    }
});


