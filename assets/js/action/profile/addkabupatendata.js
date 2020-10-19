$(document).ready(function() {
console.log('jQuery verison : '+ $.fn.jquery);
$('#menu-dashboard').removeClass('active');

$('#menu-profile-pengelola').addClass('active');
$('#menu-profile-pengelola > .hidden-ul').show();
$('#data-kabupaten').css('background-color', '#ffecb0');

  $('#btnSave').on('click', function(){
  var data = {
      dinas_pertanian_kabupaten : $('#dinas_pertanian_kabupaten').val(),
      kecamatan : $('#kecamatan').val(),
      desa_kelurahan : $('#desa_kelurahan').val(),
      nama_pejabat : $('#nama_pejabat').val(),
      nip_pejabat : $('#nip_pejabat').val(),
      nik_pejabat : $('#nik_pejabat').val(),
      jabatan : $('#jabatan').val(),
      luas_sawah : $('#luas_sawah').val(),
      luas_ladang : $('#luas_ladang').val(),
      luas_sawah_ladang : $('#luas_sawah_ladang').val(),
      ip : $('#ip').val(),
      hasil : $('#hasil').val(),
      produksi : $('#produksi').val(),
      pola_tanam : $('#pola_tanam').val(),
      varietas : $('#varietas').val(),
      bantuan : $('#bantuan').val(),
      milik_aset : $('#milik_aset').val(),
      jml_aset : $('#jml_aset').val(),
      tahun_perolehan : $('#tahun_perolehan').val(),
      sumber_aset : $('#sumber_aset').val()
    }
    savedatakabupaten(data);
  });
});

function savedatakabupaten(data){
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'savedatakabupaten',
        data : data,
        success: function(result){
          Swal.fire({
            title: 'Sukses!',
            text: "Berhasil Tambah Data Kabupaten",
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: '<i class="fas fa-check"></i>'
          }).then((result) => {
          if (result.isConfirmed) {
            window.location.href='kabupaten';
            }
          });
        }
      })
    }
