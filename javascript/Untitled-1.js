$( document).on("pagebeforeshow",function ( event,ui) {
		//console.log("pagebeforeshow "+ $($.mobile.activePage).attr("id"))
		//console.log(" ")
		//loadLeftPanel()
	if ($('.img-container').length) {
		$('.img-container').each(function () {
		$(this).wrap('<span class="thumbnails" style="float:' + $(this).css('float') + ';width:' + $(this).width() + 'px;" >Click to enlarge image</span>');
	});
	}
});
$( document).on("pagecreate",function ( event,ui) {
$('.img-container').click(function() {
	$(this).clone().appendTo('#cover');
	
	$('#cover .img-container').wrap('<div id="div-enlarge" class="thumbnails" style="color:#000;padding-top:20px;height:100%; width:100%; position: fixed;">Click anywhere to close this display</span>');
	
	//$('#cover').css({'background': 'url(../images/full_bg.png) repeat scroll 0 0 transparent'});
	
	$('#cover').fadeToggle('fast');
	
	//$("#cover .img-container").removeAttr("style").removeClass("my-image-class");
	
	$('#cover .img-container').css({'display':'block','margin':'0 auto', 'padding-top':'20px', 'z-index':'5000'});
	
	var imageWidth  = $(this).width();
	var imageHeight = $(this).height();
	var parentWidth  = $(window).width();
	var parentHeight = $(window).height();
	var desiredSize = 0.85;
	var newWidth, newHeight;

	if(imageWidth/parentWidth > imageHeight/parentHeight) {
	  newWidth  = parentWidth * desiredSize;
	  newHeight = newWidth * (imageHeight / imageWidth);
	  $('#cover .img-container').stop(true, false).animate({width: [newWidth + 'px', 'swing'], height: [newHeight + 'px', 'swing']}, 1500);
	} else {
	  newHeight = parentHeight * desiredSize;
	  newWidth  = newHeight * (imageWidth / imageHeight);
	  $('#cover .img-container').stop(true, false).animate({width: [newWidth + 'px', 'swing'], height: [newHeight + 'px', 'swing']}, 1500);
	}
});

$('#cover').click(function() {
$(this).find('#div-enlarge').remove();
$(this).fadeToggle('fast');
});

 });
