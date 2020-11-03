//humbargar menu

function openMenu(){
  document .getElementById('navbar').style.height="100%"; 
}
function closeMenu(){
  document .getElementById('navbar').style.height="0";
}

$(function(){
    $('.menu-item a').on('click', function(){
       $('html, body').animate({
           scrollTop: $($.attr(this,'href')).offset().top
       }, 1000); 
    });
});

//mixitup
var mixer = mixitup('.work-container');