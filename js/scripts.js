$(".card").hover(function(){
    $(this).children(".two").show("fast", "linear");
});
$(document).ready(function(sogomi){
    $("button#javi").click(function(){
        var client=document.getElementById("name").value;
        alert(client + " " + "Thank you, for contacting us")
        sogomi.preventDefault
    })
})
var price, crustPrice;
let total = 0;
function msg(type, size, crust, toppings, total) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}

$(document).ready(function(){
    $(".placeholder").click(function(event){
        let pizzaType = $(".pizzaType option:selected").val();
        // alert(pizzaType)
        let pizzaSize = $(".pizzaSize option:selected").val();
        // alert(pizzaSize)
        let pizzaCrust = $(".pizzaCrust option:selected").val();
        // alert(pizzaCrust)
        let pizzaToppings = $(".pizzaToppings option:selected").val();
        // alert(pizzaToppings)
    });
    console.log(pizzaToppings.join(", "));
    switch(pizzaSize){
        case "0":
        price = 0;
        break;
        case "extra large":
          price = 1200;
          console.log("extra large: "+price);
          break;
          case "large":
          price = 1000;
          console.log("large: "+price);
          break;
          case "medium":
          price = 800;
          console.log("medium: "+price);
          break;
          case "small":
          price = 600;
          console.log("small: "+price);
          default:
              console.log("error");
    }
    switch(pizzaCrust){
        case "0":
        crustPrice = 0;
        break;
        case "thin":
        crustPrice = 300;
        break;
        case "thick":
        crustPrice = 350;
        break;
        case "deep":
        crustPrice = 450;
        break;
        case "cheese filled":
        crustPrice = 500;
        break;
        case "stuffed":
        crustPrice = 350;
        break;
        default:
              console.log("No price");
    }
    let toppingsTotal = pizzaToppings.length*100;
    console.log("toppingsTotal: "+ toppingsTotal);
    if((pizzaSize == "0") && (pizzaCrust == "0")){
        console.log("nothing selected");
        $(".placeOrder").show();
        $(".details").hide();
        alert("please select pizza size and crust");
    }
    else{
        $(".placeOrder").hide();
        $(".details").show();
    }
    total = price + crustPrice + toppingsTotal;
    console.log(total);
    let checkoutTotal = "0";
    checkoutTotal = checkoutTotal + total

    $("#pizzatype").html($("#type option:selected").val());
    $("#pizzasize").html($("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzasize").html(pizzaToppings.join(", "));
    $("#total").html(total);

$("button.submit").click(function(){
    let pizzaType = $("#pizzaType option:selected").val();
    let pizzaSize = $("#pizzaSize option:selected").val();
    let pizzaCrust = $("#pizzaCrust option:selected").val();
    let pizzaToppings = [];
    $.each($("input[name='toppings']:checked"), function(){
        pizzaToppings.push($(this).val());
    });
    console.log(pizzaToppings.join(", "));
    switch(pizzaSize){
        case "0":
            price =0;
            break;
        case "extra large":
            price =1200;
            console.log("extra large: "+price)
            break;
            case "large":
            price =1000;
            console.log("large: "+price)
            break;
        case "medium":
            price =800;
            console.log("medium: "+price)
            break;
        case "small":
            price =600;
            console.log("small: "+price)
          default:
              console.log("error");   
    }
    switch(pizzaCrust){
        case "0":
            crustPrice = 0;
            break;
        case "thin":
            crustPrice = 300;
            console.log("crustPrice: "+crustPrice);
            break;
        case "thick":
            crustPrice = 350;
            console.log("crustPrice: "+crustPrice);
            break;
        case "deep":
            crustPrice = 450;
            console.log("crustPrice: "+crustPrice);
            break;
        case "cheese filled":
            crustPrice = 500;
            console.log("crustPrice: "+crustPrice);
            break;
        case "stuffed":
            crustPrice = 350;
            console.log("crustPrice: "+crustPrice);
            break;
          default:
              console.log("No price");
            }
            let toppingsTotal = pizzaToppings.length*100;
            console.log("toppingsTotal: "+toppingsTotal);
            total = price + crustPrice + toppingsTotal;
            console.log(total);

            checkoutTotal = checkoutTotal + total;
            console.log(checkoutTotal);

            var newOrder = new newOrder(pizzaType, pizzaSize, pizzaCrust, pizzaToppings, total);

});

}
