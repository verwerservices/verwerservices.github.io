(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
if($(window).width() >= 960) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-horizontal-1575-2.png' : 'images/logo-horizontal-1050-3.png') : 'images/logo-horizontal-525-2.png');} else if($(window).width() >= 768) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-horizontal-1575.png' : 'images/logo-horizontal-1050-2.png') : 'images/logo-horizontal-525.png');} else if($(window).width() >= 480) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-horizontal-1050.png' : 'images/logo-horizontal-700.png') : 'images/logo-horizontal-350.png');
} else {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-horizontal-750.png' : 'images/logo-horizontal-500.png') : 'images/logo-horizontal-250.png');
}
};
$(window).resize(r);
r();

});