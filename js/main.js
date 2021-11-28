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