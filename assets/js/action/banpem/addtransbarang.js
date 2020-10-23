$(document).ready(function() {
console.log('jQuery verison : '+ $.fn.jquery);
$('#menu-dashboard').removeClass('active');

$('#menu-realisasi-banpem').addClass('active');
$('#menu-realisasi-banpem > .hidden-ul').show();
$('#data-transbarang').css('background-color', '#ffecb0');

$('#btnSave').on('click', function(){
    var data = {
    kabupatan : $('#kabupatan').val(),
    kecamatan : $('#kecamatan').val(),
    desa : $('#desa').val(),
    kelompok_tani : $('#kelompok_tani').val(),
    target_vol : $('#target_vol').val(),
    target_rp : $('#target_rp').val(),
    realisasi_vol : $('#realisasi_vol').val(),
    realisasi_rp : $('#realisasi_rp').val(),
    no_bast_kab : $('#no_bast_kab').val(),
    no_bast_kelompok : $('#no_bast_kelompok').val(),
    surat_jalan_nomor : $('#surat_jalan_nomor').val(),
    surat_jalan_tanggal : $('#surat_jalan_tanggal').val(),
    penyedia_barang : $('#penyedia_barang').val(),
    jenis_varietas : $('#jenis_varietas').val(),
    lot : $('#lot').val(),
    sertifikat : $('#sertifikat').val(),
    tanam : $('#tanam').val(),
    panen : $('#panen').val(),
    prov : $('#prov').val(),
    produksi : $('#produksi').val(),
    keterangan : $('#keterangan').val(),
  }
  savetransbarang(data);
});

});

function savetransbarang(data){
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'savetransbarang',
        data : data,
        success: function(result){
          Swal.fire({
            title: 'Sukses!',
            text: "Berhasil Tambah Transfer Barang",
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: '<i class="fas fa-check"></i>'
          }).then((result) => {
          if (result.isConfirmed) {
            window.location.href='transbarang';
            }
          });
        }
      })
    }
