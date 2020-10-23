$(document).ready(function() {
  console.log('jQuery verison : '+ $.fn.jquery);
  $('#menu-dashboard').removeClass('active');

  $('#menu-realisasi-kegiatan').addClass('active');
  $('#menu-realisasi-kegiatan > .hidden-ul').show();
  $('#data-apbntp').css('background-color', '#ffecb0');

  $('#btnSave').on('click', function(){
    var data = {
      kegiatan : $('#kegiatan').val(),
      prov_kab_kot : $('#prov_kab_kot').val(),
      satuan : $('#satuan').val(),
      target_vol : $('#target_vol').val(),
      target_rp : $('#target_rp').val(),
      realis_vol : $('#realis_vol').val(),
      realis_persen_1 : $('#realis_persen_1').val(),
      realis_rp : $('#realis_rp').val(),
      realis_persen_2 : $('#realis_persen_2').val(),
      permasalahan : $('#permasalahan').val(),
      tindak_lanjut : $('#tindak_lanjut').val(),
      no_proposal : $('#no_proposal').val(),
      opd : $('#opd').val(),
      sektor : $('#sektor').val(),
      kegiatan_proposal : $('#kegiatan_proposal').val(),
      output : $('#output').val(),
      komponen : $('#komponen').val(),
      sub_komponen : $('#sub_komponen').val(),
      komoditas : $('#komoditas').val(),
      usulan : $('#usulan').val(),
      total_usulan : $('#total_usulan').val(),
      penerima : $('#penerima').val(),
      kecmatan : $('#kecmatan').val(),
      desa : $('#desa').val(),
      alamat : $('#alamat').val(),
      skcpl : $('#skcpl').val(),
      kontrak : $('#kontrak').val(),
      tanam : $('#tanam').val(),
    };

    saveapbntp(data);

  });

});

function saveapbntp(data){
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'saveapbntp',
        data : data,
        success: function(result){
          Swal.fire({
            title: 'Sukses!',
            text: "Berhasil Tambah APBN TP",
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: '<i class="fas fa-check"></i>'
          }).then((result) => {
          if (result.isConfirmed) {
            window.location.href='apbntp';
            }
          });
        }
      })
    }
