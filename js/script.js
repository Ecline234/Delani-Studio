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

$(document).ready(function(){
    $("#port").mouseover(function(){
        $("#port").show(".p-hide");
    });
    $("#port").mouseout(function(){
        $("#port").hide(".p-hide")
    });
});

$(document).ready(function(){
    $("#form").submit(function(event) {
        var nameInput = $("input#name")
        $(".name").submit("");
        alert("Thankyou + "name"."We have received your message");
    })
})