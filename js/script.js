$(document).ready(function(){
    $("#design").click(function(){
        $(".design-hidden").toggle();
        $("#one").toggle();
    });
});

$(document).ready(function(){
    $("#dev").click(function(){
        $(".dev-hidden").toggle();
        $(".two").toggle();
    });
});

$(document).ready(function(){
    $("#project").click(function(){
        $(".project-hidden").toggle();
        $(".three").toggle();
    });
});