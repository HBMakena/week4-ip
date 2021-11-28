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
const sizeSelect = document.getElementById("size");
const crustSelect = document.getElementById("crust");
const toppingsSelect = document.getElementById("toppings");
const numberSelect = document.getElementById("number");
const deliverySelect = document.getElementById("delivery");

const size = ["Large", "Medium", "Small"];
const crust = ["Crispy", "Stuffed", "Glutten-free"];
const toppings = ["Deluxe", "Hawaiian", "Boerewors", "Pepperoni", "Peri peri", "Cheese Burger"];
const delivery = ["Yes", "No"];

(function populateSize(){
    for(let i = 0; i < size.length; i++){
        const option = document.createElement("option");
        option.textContent = size[i];
        sizeSelect.appendChild(option);
    }
    sizeSelect.value = "Large";
})();