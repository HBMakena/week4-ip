const pizzaPrices = {
  small: 600,
  medium: 800,
  large: 1000
};

const toppingsSmallPrices = {
  deluxe: 70,
  hawaiian: 70,
  boerewors: 90,
  pepperoni: 80,
  periperi: 80,
  cheeseBurger: 100
};

const toppingsMediumPrices = {
  deluxe: 80,
  hawaiian: 80,
  boerewors: 100,
  pepperoni: 90,
  periperi: 90,
  cheeseBurger: 110
};

const toppingsLargePrices = {
  deluxe: 90,
  hawaiian: 90,
  boerewors: 110,
  pepperoni: 100,
  periperi: 100,
  cheeseBurger: 120
};

let totalPrice = 0;

$(document).ready(function () {
  $(".btn").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();

    if (name == "" || email == "" || mobile == "") {
      alert("Please Enter Information Required");
    } else {
      alert(name + " " + "Thank You For Contacting Us");
    }
  });
});

function delivery() {
  let yes = document.getElementById("yes").checkout;
  let no = document.getElementById("no").checkout;
      console.log(yes,no);
    alert("your delivery fee wil be 100 ksh");
    prompt("where do yo want it to be delivered");
    alert("your pizza will be delivered to your location");
  
};

function myOrder() {
  let size = $("#size").val();
  let crust = $("#crust").val();
  let topping = $("#toppings").val();
  let quantity = $("#number").val();
  let toppingsCost = 0;

  if (size == "small") {
    if (topping == "deluxe") {
      toppingsCost += toppingsSmallPrices.deluxe
    }

    if (topping == "hawaiian") {
      toppingsCost += toppingsSmallPrices.hawaiian
    }

    if (topping == "boerewors") {
      toppingsCost += toppingsSmallPrices.boerewors
    }

    if (topping == "pepperoni") {
      toppingsCost += toppingsSmallPrices.pepperoni
    }

    if (topping == "periperi") {
      toppingsCost += toppingsSmallPrices.periperi
    }

    if (topping == "cheeseBurger") {
      toppingsCost += toppingsSmallPrices.cheeseBurger
    }
    totalPrice = (pizzaPrices.small * quantity) + (toppingsCost * quantity);
  } else if (size == "medium") {
    if (topping == "deluxe") {
      toppingsCost += toppingsMediumPrices.deluxe
    }

    if (topping == "hawaiian") {
      toppingsCost += toppingsMediumPrices.hawaiian
    }

    if (topping == "boerewors") {
      toppingsCost += toppingsMediumPrices.boerewors
    }

    if (topping == "pepperoni") {
      toppingsCost += toppingsMediumPrices.pepperoni
    }

    if (topping == "periperi") {
      toppingsCost += toppingsMediumPrices.periperi
    }

    if (topping == "cheeseBurger") {
      toppingsCost += toppingsMediumPrices.cheeseBurger
    }

    totalPrice = (pizzaPrices.medium * quantity) + (toppingsCost * quantity);
  } else if (size == "large") {
    if (topping == "deluxe") {
      toppingsCost += toppingsLargePrices.deluxe
    }

    if (topping == "hawaiian") {
      toppingsCost += toppingsLargePrices.hawaiian
    }

    if (topping == "boerewors") {
      toppingsCost += toppingsLargePrices.boerewors
    }

    if (topping == "pepperoni") {
      toppingsCost += toppingsLargePrices.pepperoni
    }

    if (topping == "periperi") {
      toppingsCost += toppingsLargePrices.periperi
    }

    if (topping == "cheeseBurger") {
      toppingsCost += toppingsLargePrices.cheeseBurger
    }

    totalPrice = (pizzaPrices.large * quantity) + (toppingsCost * quantity);
  } else {
    alert("Please select a pizza size")
  }

  console.log(totalPrice);

  alert("Your Order Fee is Ksh " + totalPrice);
};