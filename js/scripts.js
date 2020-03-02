$(".card").hover(function(){
    $(this).children(".two").show("fast", "linear");
});
$(document).ready(function(sogomi){
    $("button#gervi").click(function(){
        var client=document.getElementById("name").value;
        var address=document.getElementById("address").value;
        alert(client + " " + "Thank you, your order will be delivered @ " + address)
        sogomi.preventDefault
    })
})
$(document).ready(function(sogomi){
    $("button#javi").click(function(){
        var client=document.getElementById("name").value;
        alert(client + " " + "Thank you, for contacting us")
        sogomi.preventDefault
    })
})
function msg() {
    
}