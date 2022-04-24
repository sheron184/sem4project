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
function closenotf(){
  $(".notf").addClass("hide");
  $(".notf-msg").empty();
}
function printerr(msg){
  $(".notf").removeClass("hide");
  $(".notf-msg").text(msg);
}
function pageMove(from,to){
  var from_id = `#${from}`;
  var to_id = `#${to}`;
  error = false;

  if(from == 2 && to == 3){
    $(".inp-log").each(function(){
      val = $(this).val();
      console.log(val);
      if(val == ""){
        console.log('val');
        $(this).css("border-bottom","2px solid red");
        error = true;
        printerr("Please fill all feilds!");
      }
    });
  }
  if(to == 3 || to == 8 || to == 9 || to == 10){
    $(".page").each(function(){
      if(!$(this).hasClass("hide")){
        var footer = $(this).find(".footer");
        var footer_nav = $(footer).find(".footer-nav");
        var footer_nav_btns = $(footer_nav).find(".footer-nav-btns");
        var btns = $(footer_nav_btns).find(".tab");
        //console.log(btns);
        $(btns).each(function(){
          //console.log($(this).attr("id"));
          if($(this).hasClass(to)){
            $(this).css("background","#034803");
          }
        });
      }
    });
  }

  //move
  if(!error){
    $(from_id).addClass("hide");
    $(to_id).removeClass("hide");
  }
}
