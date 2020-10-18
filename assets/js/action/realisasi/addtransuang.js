$(document).ready(function() {
console.log('jQuery verison : '+ $.fn.jquery);
$('#menu-dashboard').removeClass('active');

$('#menu-realisasi-banpem').addClass('active');
$('#menu-realisasi-banpem > .hidden-ul').show();
$('#data-transuang').css('background-color', '#ffecb0');
});
