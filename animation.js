
$(document).ready(function(){
$(".link").on("click", function () {
    $("#cart").attr("src", $(this).attr("src"));
});
});