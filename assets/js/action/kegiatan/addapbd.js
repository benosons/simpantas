$(document).ready(function() {
console.log('jQuery verison : '+ $.fn.jquery);
$('#menu-dashboard').removeClass('active');

$('#menu-realisasi-kegiatan').addClass('active');
$('#menu-realisasi-kegiatan > .hidden-ul').show();
$('#data-apbd').css('background-color', '#ffecb0');

  $('#btnSave').on('click', function(){
      var data = {
        kegiatan : $('#kegiatan').val(),
        prov_kab_kot : $('#prov_kab_kot').val(),
        satuan : $('#satuan').val(),
        target_vol : $('#target_vol').val(),
        target_rp : $('#target_rp').val(),
        realis_vol : $('#realis_vol').val(),
        relais_persen_1 : $('#relais_persen_1').val(),
        realis_rp : $('#realis_rp').val(),
        realis_persen_2 : $('#realis_persen_2').val(),
        permasalahan : $('#permasalahan').val(),
        tindak_lanjut : $('#tindak_lanjut').val(),
      }
      saveapbd(data);
  });
});

function saveapbd(data){
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'saveapbd',
        data : data,
        success: function(result){
          Swal.fire({
            title: 'Sukses!',
            text: "Berhasil Tambah APBD",
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: '<i class="fas fa-check"></i>'
          }).then((result) => {
          if (result.isConfirmed) {
            window.location.href='apbd';
            }
          });
        }
      })
    }
