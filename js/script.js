$('.page-scroll').on('click', function(e){
    
    //ambil isi href
    var tujuan = $(this).attr('href');
    //get elemen
    var elemenTujuan = $(tujuan);

    // pindah scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    },1000,'easeInOutExpo');
    e.preventDefault();
});