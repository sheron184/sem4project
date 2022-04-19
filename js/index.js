var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

setTimeout (function(){
	$(".page-1").addClass("hide");
	$(".page-2").removeClass("hide");
},1200);

function pageMove(from,to){
  var from_id = `#${from}`;
  var to_id = `#${to}`;

  $(from_id).addClass("hide");
  $(to_id).removeClass("hide");
}
