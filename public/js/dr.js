//$(function(){
//    $('#home' a:contains('Home')).parent().addClass('active');
//});

$(document).ready(function () {
    $(".nav li").removeClass("active");//this will remove the active class from  
                                       //previously active menu item 
    $('#home').addClass('active');
    //for demo
    //$('#demo').addClass('active');
    //for sale 
    //$('#sale').addClass('active');
});