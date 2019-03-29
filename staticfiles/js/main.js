$(".toggle-icon").click(function() {
  $('#nav-container').toggleClass("pushed");
});

$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		});
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		});
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
	});

$(document).ready(function() {
   let container_width = SINGLE_IMAGE_WIDTH * $(".container-inner a").length;
   $(".container-inner").css("width", container_width);
});