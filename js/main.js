$(window).on("load",function(){

    // pagescroll to id 
    $("a[rel='mPageScroll2id']").mPageScroll2id();

    // video background vide.js
    $('#header').vide('./video/nature', {
        bgColor: 'transparent'
    });
});