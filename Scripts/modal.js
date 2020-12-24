$(function ()
{
    
    $open = $("#open");
    $close = $("#close");
    $modal = $("#modal");
    $open.on("click", function () {
        $modal.css("display", "block");
        //alert("hello");

    });
    $close.on("click", function () {
        $modal.css("display", "none");

    });
});