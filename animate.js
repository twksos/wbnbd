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
    animateClick();
    return ;
  }
  $("#kw").attr("value", typed + toBeType);
  requestAnimFrame(animateType);
}
function clickButton(){
  $("form").attr("action", "http://www.baidu.com/s");
  location.hash = '#click=true' 
  $("#su").addClass('s_btn_h').delay(300).click();
}
function animateClick(){
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
  console.log(getHash('q'));
  if(getHash('q') === null) { 
    if(location.hash === '#click=true' ) #('#after-ad').show();
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