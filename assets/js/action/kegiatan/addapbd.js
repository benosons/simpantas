$(document).ready(function() {
console.log('jQuery verison : '+ $.fn.jquery);
$('#menu-dashboard').removeClass('active');

$('#menu-realisasi-kegiatan').addClass('active');
$('#menu-realisasi-kegiatan > .hidden-ul').show();
$('#data-apbd').css('background-color', '#ffecb0');
});