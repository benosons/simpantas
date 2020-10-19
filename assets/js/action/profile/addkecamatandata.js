$(document).ready(function() {
console.log('jQuery verison : '+ $.fn.jquery);
$('#menu-dashboard').removeClass('active');

$('#menu-profile-pengelola').addClass('active');
$('#menu-profile-pengelola > .hidden-ul').show();
$('#data-kecamatan').css('background-color', '#ffecb0');

$('#btnSave').on('click', function(){
var data = {
  bpp: $('#bpp').val(),
  penyuluh: $('#penyuluh').val(),
  nip_penyuluh: $('#nip_penyuluh').val(),
  nik_penyuluh: $('#nik_penyuluh').val(),
  status_penyuluh: $('#status_penyuluh').val(),
  kecamatan: $('#kecamatan').val(),
  luas_sawah_kec: $('#luas_sawah_kec').val(),
  luas_ladang_kec: $('#luas_ladang_kec').val(),
  luas_sawah_ladang_kec: $('#luas_sawah_ladang_kec').val(),
  ip_kec: $('#ip_kec').val(),
  hasil_kec: $('#hasil_kec').val(),
  produksi_kec: $('#produksi_kec').val(),
  pola_tanam_kec: $('#pola_tanam_kec').val(),
  komoditas_kec: $('#komoditas_kec').val(),
  varietas_kec: $('#varietas_kec').val(),
  bantuan_kec: $('#bantuan_kec').val(),
  milik_aset_kec: $('#milik_aset_kec').val(),
  jml_aset_kec: $('#jml_aset_kec').val(),
  thn_perolehan_kec: $('#thn_perolehan_kec').val(),
  sumber_aset_kec: $('#sumber_aset_kec').val(),
  luas_sawah_desa: $('#luas_sawah_desa').val(),
  luas_ladang_desa: $('#luas_ladang_desa').val(),
  luas_sawah_ladang_desa: $('#luas_sawah_ladang_desa').val(),
  ip_desa: $('#ip_desa').val(),
  hasil_desa: $('#hasil_desa').val(),
  produksi_desa: $('#produksi_desa').val(),
  pola_tanam_desa: $('#pola_tanam_desa').val(),
  varietas_desa: $('#varietas_desa').val(),
  bantuan_desa: $('#bantuan_desa').val(),
  milik_aset_desa: $('#milik_aset_desa').val(),
  jml_aset_desa: $('#jml_aset_desa').val(),
  thn_perolehan_desa: $('#thn_perolehan_desa').val(),
  sumber_aset_desa: $('#sumber_aset_desa').val()
  }
savedatakecamatan(data);
});

});

function savedatakecamatan(data){
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'savedatakecamatan',
        data : data,
        success: function(result){
          Swal.fire({
            title: 'Sukses!',
            text: "Berhasil Tambah Data Kecamatan",
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: '<i class="fas fa-check"></i>'
          }).then((result) => {
          if (result.isConfirmed) {
            window.location.href='kecamatan';
            }
          });
        }
      })
    }
