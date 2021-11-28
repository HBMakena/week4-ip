$(document).ready(function(){
    $(".btn").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var mobile = $("#mobile").val();
        
        if(name == '' || email == '' || mobile == ''){
            alert("Please Enter Information Required");
        }
        else {
            alert(name + " " + "Thank You For Contacting Us");
        }
    })
});
$(document).ready(function(){
    $(".you").click(function(){
        $(".about").hide();
        $(".product").hide();
        $(".service").hide();
        $(".contact").hide();
        $(".home").show();
    });
    $(".you").click(function(){
        $(".home").show();
        $(".about").show();
        $(".product").show();
        $(".service").show();
        $(".contact").show();

    });
});