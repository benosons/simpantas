$(document).ready(function() {
console.log('jQuery verison : '+ $.fn.jquery);
$('#menu-dashboard').removeClass('active');

$('#menu-profile-pengelola').addClass('active');
$('#menu-profile-pengelola > .hidden-ul').show();
$('#data-gapoktan').css('background-color', '#ffecb0');

$('#btnSave').on('click', function(){
    var data = {
      nama : $('#nama').val(),
      tahun_pembentukan : $('#tahun_pembentukan').val(),
      alamat : $('#alamat').val(),
      kelas : $('#kelas').val(),
      skor : $('#skor').val(),
      tahun_penetapan : $('#tahun_penetapan').val(),
      jml_anggota : $('#jml_anggota').val(),
      no : $('#no').val(),
      nama_anggota : $('#nama_anggota').val(),
      nik_anggota : $('#nik_anggota').val(),
      status_anggota : $('#status_anggota').val(),
      luas_sawah : $('#luas_sawah').val(),
      luas_ladang : $('#luas_ladang').val(),
      luas_sawah_ladang : $('#luas_sawah_ladang').val(),
      ip : $('#ip').val(),
      hasil : $('#hasil').val(),
      produksi : $('#produksi').val(),
      pola_tanam : $('#pola_tanam').val(),
      status_lahan : $('#status_lahan').val(),
      komoditas : $('#komoditas').val(),
      varietas : $('#varietas').val(),
      bantuan : $('#bantuan').val(),
      milik_aset : $('#milik_aset').val(),
      jml_aset : $('#jml_aset').val(),
      tahun_perolehan : $('#tahun_perolehan').val(),
      sumber_aset : $('#sumber_aset').val(),
      kordinat : $('#kordinat').val(),
    }
    savedatapoktan(data);

  });
});

function savedatapoktan(data){
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'savedatapoktan',
        data : data,
        success: function(result){
          Swal.fire({
            title: 'Sukses!',
            text: "Berhasil Tambah Data Kelompok Tani",
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: '<i class="fas fa-check"></i>'
          }).then((result) => {
          if (result.isConfirmed) {
            window.location.href='gapoktan';
            }
          });
        }
      })
    }
