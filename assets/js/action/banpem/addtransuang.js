$(document).ready(function() {
console.log('jQuery verison : '+ $.fn.jquery);
$('#menu-dashboard').removeClass('active');

$('#menu-realisasi-banpem').addClass('active');
$('#menu-realisasi-banpem > .hidden-ul').show();
$('#data-transuang').css('background-color', '#ffecb0');

  $('#btnSave').on('click', function(){
    var data = {
      kabupaten : $('#kabupaten').val(),
      kecamatan : $('#kecamatan').val(),
      desa : $('#desa').val(),
      kelompok_tani : $('#kelompok_tani').val(),
      diterima_rupiah : $('#diterima_rupiah').val(),
      tanggal_diterima : $('#tanggal_diterima').val(),
      digunakan_rupiah : $('#digunakan_rupiah').val(),
      tanggal_digunakan : $('#tanggal_digunakan').val(),
      saldo_digunakan : $('#saldo_digunakan').val(),
      dikembalikan_rupiah : $('#dikembalikan_rupiah').val(),
      tanggal_setoran : $('#tanggal_setoran').val(),
      no_bast : $('#no_bast').val(),
      tanggal_bast : $('#tanggal_bast').val(),
      alokasi_benih_vol : $('#alokasi_benih_vol').val(),
      alokasi_benih_rp : $('#alokasi_benih_rp').val(),
      alokasi_pupuk_vol : $('#alokasi_pupuk_vol').val(),
      alokasi_pupuk_rp : $('#alokasi_pupuk_rp').val(),
      alokasi_bangunan_vol : $('#alokasi_bangunan_vol').val(),
      alokasi_bangunan_rp : $('#alokasi_bangunan_rp').val(),
      realisasi_benih_vol : $('#realisasi_benih_vol').val(),
      realisasi_benih_sertifikasi : $('#realisasi_benih_sertifikasi').val(),
      realisasi_benih__rp : $('#realisasi_benih__rp').val(),
      realisasi_benih_penyedia : $('#realisasi_benih_penyedia').val(),
      realisasi_pupuk_vol : $('#realisasi_pupuk_vol').val(),
      realisasi_pupuk_rp : $('#realisasi_pupuk_rp').val(),
      realisasi_pupuk_penyedia : $('#realisasi_pupuk_penyedia').val(),
      realisasi_bangunan_vol : $('#realisasi_bangunan_vol').val(),
      realisasi_bangunan_rp : $('#realisasi_bangunan_rp').val(),
      sisa_benih_vol : $('#sisa_benih_vol').val(),
      sisa_benih_rp : $('#sisa_benih_rp').val(),
      sisa_pupuk_vol : $('#sisa_pupuk_vol').val(),
      sisa_pupuk_rp : $('#sisa_pupuk_rp').val(),
      sisa_bangunan_vol : $('#sisa_bangunan_vol').val(),
      sisa_bangunan_rp : $('#sisa_bangunan_rp').val(),
      fisik_tanam : $('#fisik_tanam').val(),
      fisik_panen : $('#fisik_panen').val(),
      fisik_prov : $('#fisik_prov').val(),
      fisik_produksi : $('#fisik_produksi').val(),
      fisik_bangunan : $('#fisik_bangunan').val(),
      keterangan : $('#keterangan').val(),
    }
    savetransuang(data);
  });
});

function savetransuang(data){
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'savetransuang',
        data : data,
        success: function(result){
          Swal.fire({
            title: 'Sukses!',
            text: "Berhasil Tambah Transfer Uang",
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: '<i class="fas fa-check"></i>'
          }).then((result) => {
          if (result.isConfirmed) {
            window.location.href='transuang';
            }
          });
        }
      })
    }
