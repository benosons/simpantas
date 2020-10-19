$( document ).ready(function() {
  console.log('You are running jQuery version: ' + $.fn.jquery);
  $('#menu-dashboard').removeClass('active');

  $('#menu-profile-pengelola').addClass('active');
  $('#menu-profile-pengelola > .hidden-ul').show();
  $('#data-gapoktan').css('background-color', '#ffecb0');
  loadpoktan();
});

function loadpoktan(){
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadpoktan',
        data : {
                param      : '',
         },
        success: function(result){
          console.log(result)
                var dt = $('#list-poktan').DataTable({
                    responsive: true,
                    bDestroy: true,
                    processing: true,
                    // autoWidth : true,
                    pageLength: 10,
                    lengthChange: true,
                    aaData: result,
                    aoColumns: [
                        { 'mDataProp': 'id'},
                        { 'mDataProp': 'nama'},
                        { 'mDataProp': 'nama_anggota'},
                        { 'mDataProp': 'alamat'},
                        { 'mDataProp': 'tahun_pembentukan'},
                        { 'mDataProp': 'tahun_penetapan'},
                        // { 'mDataProp': 'nama_pejabat'},
                    ],
                    // order: [[0, 'ASC']],
                    // aoColumnDefs:[
                    //     {
                    //         mRender: function (data, type, row){
                    //             var $rowData = '';
                    //                 $rowData += `
                    //                           <div class="row">
                    //                             <div class="col-md-4">
                    //                               <button onclick="autoPlayYouTubeModal('`+row.url+`')" type="button" class="btn btn-block btn-success btn-sm"><i class="far fa-eye"></i></button>
                    //                             </div>
                    //                             <div class="col-md-4">
                    //                               <button onclick="editvideo(`+row.id+`,'`+row.judul+`','`+row.url+`','`+row.desc+`')" type="button" class="btn btn-block btn-warning btn-sm"><i class="far fa-edit"></i></button>
                    //                             </div>
                    //                             <div class="col-md-4">
                    //                               <button onclick="deletevideo(`+row.id+`)" type="button" class="btn btn-block btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                    //                             </div>
                    //                           </div>
                    //                             `;
                    //
                    //             return $rowData;
                    //         },
                    //         aTargets: [4]
                    //     },
                    // ],

                    fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
                        var index = iDisplayIndexFull + 1;
                        $('td:eq(0)', nRow).html(' '+index);
                        return  ;
                    },

                });

            }
    });
}
