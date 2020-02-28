$(".card").hover(function(){
    $(this).children(".two").fadeToggle("fast", "linear");
});
$(document).ready(function(sogomi){
    $("button").click(function(){
        var client=document.getElementById("name").value;
        alert(client + " " + "Thank you, for contacting us.")
        sogomi.preventDefault
    })
})