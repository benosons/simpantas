$(document).ready(function() {
console.log('jQuery verison : '+ $.fn.jquery);
$('#menu-dashboard').removeClass('active');

$('#menu-profile-pengelola').addClass('active');
$('#menu-profile-pengelola > .hidden-ul').show();
$('#data-kecamatan').css('background-color', '#ffecb0');
});