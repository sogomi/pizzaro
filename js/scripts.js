$(".card").hover(function(){
    $(this).children(".two").show("fast", "linear");
});
$(document).ready(function(sogomi){
    $("button").click(function(){
        var client=document.getElementById("name").value;
        alert(client + " " + "Thank you, for contacting")
        sogomi.preventDefault
    })
})