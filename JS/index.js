<script type="text/javascript">
	$(document).ready(function(){
		$('.nav-button').click(function(){

			$('.nav-items').slideToggle();
		});

		$(window).resize(function(){

			if ($(window).width() > 650) {
				$('.nav-items')
					.removeAttr('style')
			}
			
		});

		$(".tan-people").hover(function() {
			if ($(window).width() > 650) {
				$(".main-pic-cover").style.display = "flex";
			}
			else {
				$('.main-pic-cover').style.display = "flex";
			};
			
		});
		
	});



</script>