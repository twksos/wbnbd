window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();

function animateStart(){
  window.setTimeout(requestAnimFrame(animateType), 1000);
}
function animateType() {
  var str = getHash('q')
  var typed = $("#kw").attr("value");
  var toBeType = str[typed.length];
  if(toBeType === undefined) {
    animateMoveToButton();
    return ;
  }
  $("#kw").attr("value", typed + toBeType);
  requestAnimFrame(animateType);
}
function clickButton(){
  location.hash = '#click=true' 
  $("#su").addClass('s_btn_h').delay(300);
  window.location.href = "http://www.baidu.com/s?wd=" + $('#kw').attr('value') + "&rsv_bp=0&rsv_spt=3";
}
function animateMoveToButton(){
  var dest = $("#su").offset();
  $("#cursor").css("background", "url(mouse_arrow_windows_aero.png)");
  $("#cursor").animate({ left: dest.left + 45, top: dest.top + 16 }, 1000 , "linear", clickButton);
}
function typeStart(){
  var start = $("#cursor").offset();
  $("#cursor").css("background", "url(mouse_text_windows_aero.png)");
  $("#cursor").animate({ left: start.left + 4, top: start.top + 4}, 100 , "linear", animateStart);
}
		
window.onload = function(){
  if(getHash('q') === null) { 
    if(location.hash === '#click=true' ) $('#after-ad').show();
    $('#su').click(function() {
      var url = location.protocol + '//' + location.host + '/#q=' + encodeURIComponent($('#kw').attr('value'));
      $('#nv').html('请分享: ' + url );
    });
  } else {
    var dest = $(".s_ipt_wr").offset();
    $("#cursor").css("background", "url(mouse_arrow_windows_aero.png)");
    $("#cursor").animate({ left: dest.left, top: dest.top }, 1000 , "linear", typeStart);
  }
};

function getHash(name) {
  var hash = location.hash.match(RegExp("[#|&]"+name+'=(.+?)(&|$)'));
  if(hash) return decodeURIComponent(hash[1]);
  else return null;
}