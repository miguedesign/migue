jQuery(document).ready(function($) {

	/* Mobile
	------------------------------*/

	var isMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {	
		isMobile = true;
	}
	/*------------------------------*/

	var form = $('.Form'),
			container = $('.Form_Container'),
			confirm = $('.Confirm'),
			form_title = $('.Form_Title'),
			email = $('#mce-EMAIL');
			Js_ShowForm = $('.Js_ShowForm'),
			Js_SendUpdate = $('.Js_SendUpdate'),
			Js_GetEmail = $('.Js_GetEmail');



	Js_ShowForm.on('click',function(e){
		e.preventDefault();
		$(this).addClass('is-hide');

		if(isMobile){
			form.addClass('is-show');
			container.addClass('is-show');
			email.focus();

		}
		else{
			// href = $(this).attr('href', 'uploads/Fluid-UI-Library.sketch');
			// window.location = $(this).attr('href');
			href = './uploads/Fluid-UI-Library.sketch'
			window.open(href);
			confirm.addClass('is-show');
		}


	});


	Js_GetEmail.on('click',function(e){
		
		form.addClass('is-show');
		confirm.removeClass('is-show');
		container.addClass('is-show');
		form_title.html('Get updates of Fluid');
		Js_SendUpdate.html('Subscribe to list');
		email.focus();

	});


	var submit = $('#mc-embedded-subscribe'),
			input = $('#mce-EMAIL'),
			$resultElement = $('#resultElement'),
			$form = $("#mc-embedded-subscribe-form");

	/*
	Validar que haya correo valido
	------------------------------*/
	submit.on('click', function(e){
		e.preventDefault();
		

		texto = $(this).html();

		$(this).html('').addClass('is-sending');


		$form.validate();
		if ($form.valid()) {
			console.log('valido');
			
			submitSubscribeForm($form, $resultElement, texto);

		}
		else{
			console.log('no valido');
			$('#mce-EMAIL').focus();
			submit.removeClass('is-sending').html(texto);

		}
		
	});

	function submitSubscribeForm($form, $resultElement, texto){
		
		$.ajax({
			type: "GET",
			url: $form.attr("action"),
			data: $form.serialize(),
			cache: false,
			dataType: "jsonp",
			jsonp: "c", // trigger MailChimp to return a JSONP response
			contentType: "application/json; charset=utf-8",
			error: function(error){
				// According to jquery docs, this is never called for cross-domain JSONP requests
			},
			
			success: function(data){
				
				submit.removeClass('is-sending').html(texto);

				if (data.result != "success") {
					var message = data.msg || "Sorry, it is not possible to subscribe. Please try again.";
					$resultElement.addClass("is-error").fadeIn();

					if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
						message = "<p>You are already subscribed, Thanks!</p>";
						$resultElement.removeClass("is-error").addClass("is-success").fadeIn();
					}

					$resultElement.html(message);

				} else {
					$resultElement.removeClass("is-error").addClass("is-success");
					// lanzar el modal
					window.location = "?r=ok";
					
				}
			}
		});
  }


	function closeModal(){
    $('#mce-EMAIL').val('');
		form.removeClass('is-show');
		container.removeClass('is-show');

		$resultElement.fadeOut();
		Js_ShowForm.removeClass('is-hide');
		submit.removeClass('is-sending')

	}

	$(document)
		.on('click','[href="#close"]',function(e){
		    e.preventDefault();
		    closeModal();
		    })
		.keydown(function(tecla){
			if(form.hasClass('is-show')){
		    if (tecla.keyCode == 27) { 
			    closeModal();			    
		    }
		  }
		});

	function getParameterByName(name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	    results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	var r = getParameterByName('r');

	
	if (r == 'ok') {

		confirm.addClass('is-show');
		Js_GetEmail.parent().html('<strong>You are already subscribed!</strong><br><small>You will get an email when there is an update to the Fluid library.<br>No spam,promise :)</small>');
	}


});