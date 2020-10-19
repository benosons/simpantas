$(document).ready(function() {
console.log('jQuery verison : '+ $.fn.jquery);
$('#menu-dashboard').removeClass('active');

$('#menu-profile-pengelola').addClass('active');
$('#menu-profile-pengelola > .hidden-ul').show();
$('#data-provinsi').css('background-color', '#ffecb0');

$('#btnSave').on('click', function(){
  var data = {
        dinas_pertanian_provinsi : $('#dinas-pertanian-provinsi').val(),
        kecamatan : $('#kecamatan').val(),
        desa_kelurahan : $('#desa-kelurahan').val(),
        nama_pejabat : $('#nama-pejabat').val(),
        nip_pejabat : $('#nip-pejabat').val(),
        nik_pejabat : $('#nik-pejabat').val(),
        jabatan : $('#jabatan').val(),
        luas_sawah : $('#luas-sawah').val(),
        luas_ladang : $('#luas-ladang').val(),
        luas_ladang_sawah : $('#luas-ladang-sawah').val(),
        ip : $('#ip').val(),
        hasil : $('#hasil').val(),
        produksi : $('#produksi').val(),
        pola_tanam : $('#pola-tanam').val(),
        varietas : $('#varietas').val(),
        bantuan : $('#bantuan').val(),
        milik_aset : $('#milik-aset').val(),
        jml_aset : $('#jml-aset').val(),
        tahun_perolehan : $('#tahun-perolehan').val(),
        sumber_aset : $('#sumber-aset').val(),
  }

  savedataprovinsi(data);
});

});

function savedataprovinsi(data){
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'savedataprovinsi',
        data : data,
        success: function(result){
          Swal.fire({
            title: 'Sukses!',
            text: "Berhasil Tambah Data Provinsi",
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: '<i class="fas fa-check"></i>'
          }).then((result) => {
          if (result.isConfirmed) {
            window.location.href='provinsi';
            }
          });
        }
      })
    }
