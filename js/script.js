$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

// Remove the class 'active' from home and switch to Menu button
var switchMenuToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#navMenuButton").className;
  if (classes.indexOf("active") == -1) {
    classes += " active";
    document.querySelector("#navMenuButton").className = classes;
  }
};

$('#main-content').load('./snippets/home-snippet.html');

window.onload=function(){
var a1 = document.getElementById("homeitem1");
$("#homeitem1long").hide();
$("#homeitem1facts").hide();
var a1count = 0;
var a2count = 0;
var a3count = 0;
function isEven(n) {
   return n % 2 == 0;
};

a1.addEventListener("click", function(){ 
    a1count += 1;
    a2count = 0;
    a3count = 0;
    $("#homeitem1long").slideToggle(500);
    $("#homeitem2").removeClass('homeiteminactive');
    $("#homeitem3").removeClass('homeiteminactive'); 
    $("#homeitem1facts").slideToggle(500);   
    $("#homeitem2long").hide();
    $("#homeitem2facts").hide();
    $("#homeitem3long").hide();
    $("#homeitem3facts").hide();
    if(isEven(a1count)){
  if(a1count===0){
    $("#homeitem1").removeClass('homeitemactive');
    $("#homeitem1").removeClass('homeiteminactive');
   }
   else{
    $("#homeitem1").removeClass('homeitemactive');
    $("#homeitem2").removeClass('homeiteminactive');
    $("#homeitem3").removeClass('homeiteminactive');
    $("#homeitem2").removeClass('homeitemactive');
    $("#homeitem3").removeClass('homeitemactive');
   }
 }
else{
$("#homeitem1").addClass('homeitemactive');
$("#homeitem1").removeClass('homeiteminactive');
$("#homeitem2").addClass('homeiteminactive');
$("#homeitem3").addClass('homeiteminactive');
        $("#homeitem2").removeClass('homeitemactive');
    $("#homeitem3").removeClass('homeitemactive');
};
    })

var a2 = document.getElementById("homeitem2");
$("#homeitem2long").hide();
$("#homeitem2facts").hide();
a2.addEventListener("click", function(){ 
    a2count += 1;
    a1count = 0;
    a3count = 0;
    $("#homeitem2long").slideToggle(500);
    $("#homeitem2facts").slideToggle(500);
    $("#homeitem1long").hide();
    $("#homeitem1facts").hide();
    $("#homeitem3long").hide();
    $("#homeitem3facts").hide();
       if(isEven(a2count)){
  if(a2count===0){
    $("#homeitem2").removeClass('homeitemactive');
    $("#homeitem2").removeClass('homeiteminactive');
   }
   else{
    $("#homeitem2").removeClass('homeitemactive');
    $("#homeitem3").removeClass('homeiteminactive');
    $("#homeitem1").removeClass('homeiteminactive');
    $("#homeitem3").removeClass('homeitemactive');
    $("#homeitem1").removeClass('homeitemactive');
   }
 }
else{
$("#homeitem2").addClass('homeitemactive');
$("#homeitem2").removeClass('homeiteminactive');
$("#homeitem3").addClass('homeiteminactive');
$("#homeitem1").addClass('homeiteminactive');
        $("#homeitem3").removeClass('homeitemactive');
    $("#homeitem1").removeClass('homeitemactive');
};
    })

var a3 = document.getElementById("homeitem3");
$("#homeitem3long").hide();
$("#homeitem3facts").hide();
a3.addEventListener("click", function(){ 
    a3count += 3;
    a2count = 0;
    a1count = 0;
    $("#homeitem3long").slideToggle(500);
    $("#homeitem3facts").slideToggle(500);
    $("#homeitem2long").hide();
    $("#homeitem2facts").hide();
    $("#homeitem1long").hide();
    $("#homeitem1facts").hide();
        if(isEven(a3count)){
  if(a3count===0){
    $("#homeitem3").removeClass('homeitemactive');
    $("#homeitem3").removeClass('homeiteminactive');
   }
   else{
    $("#homeitem3").removeClass('homeitemactive');
    $("#homeitem2").removeClass('homeiteminactive');
    $("#homeitem1").removeClass('homeiteminactive');
    $("#homeitem2").removeClass('homeitemactive');
    $("#homeitem1").removeClass('homeitemactive');
   }
 }
else{
$("#homeitem3").addClass('homeitemactive');
$("#homeitem3").removeClass('homeiteminactive');
$("#homeitem2").addClass('homeiteminactive');
$("#homeitem1").addClass('homeiteminactive');
        $("#homeitem2").removeClass('homeitemactive');
    $("#homeitem1").removeClass('homeitemactive');
};
    })



}
