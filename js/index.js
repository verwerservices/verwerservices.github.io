(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
if($(window).width() >= 960) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-960-4.png' : 'images/logo-640-4.png') : 'images/logo-320-4.png');} else if($(window).width() >= 768) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-960-3.png' : 'images/logo-640-3.png') : 'images/logo-320-3.png');} else if($(window).width() >= 480) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-960-2.png' : 'images/logo-640-2.png') : 'images/logo-320-2.png');
} else {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-960.png' : 'images/logo-640.png') : 'images/logo-320.png');
}
};
$(window).resize(r);
r();

});