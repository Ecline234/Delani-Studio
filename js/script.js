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

$("#port").hover(function(){
    $(".p-hide",this).show("slow",);
}, function(){
    $(".p-hide",this).hide("slow",)
})

//
//     if($"input:first").val()===""){
//         $("span").text("Thankyou + "" for your message.").show();
//         return;
//     }

$("form").submit(function(){
    var name = document.getElementById("name")
    var email = document.getElementById("email");
    var message = document.getElementById("floatingtextarea2");
    if(name === "" || email===""|| message==="");
    alert("Thankyou for your message");
});
