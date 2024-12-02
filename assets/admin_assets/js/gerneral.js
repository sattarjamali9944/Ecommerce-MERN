/*Delete Category */

		$(document).ready(function() {

          $('#loading').hide();

			$("#show_hide_password a").on('click', function (event) {
				event.preventDefault();
				if ($('#show_hide_password input').attr("type") == "text") {
					$('#show_hide_password input').attr('type', 'password');
					$('#show_hide_password i').addClass("bx-hide");
					$('#show_hide_password i').removeClass("bx-show");
				} else if ($('#show_hide_password input').attr("type") == "password") {
					$('#show_hide_password input').attr('type', 'text');
					$('#show_hide_password i').removeClass("bx-hide");
					$('#show_hide_password i').addClass("bx-show");
				}
			});
			function validationError(response)
         		{
         			
         			if(response.error === false && response.message.full_name && response.message.full_name.msg!=''){
							$('#full_name').html(response.message.full_name.msg);
						}
						else
						{
							$('#full_name').html('');
						}	
						if(response.error === false && response.message.email && response.message.email.msg!='' ){
							$('#email').html(response.message.email.msg);
						}
						else
					    {
						$('#email').html('');
					    }
						if(response.error === false  && response.message.phone && response.message.phone.msg!='' ){
							$('#phone').html(response.message.phone.msg);
						}
						else
					    {
						$('#phone').html('');
					    }
						if(response.error === false  && response.message.password && response.message.password.msg!=''){
							$('#password').html(response.message.password.msg);
						}
						else
					    {
						$('#password').html('');
					    }
         		}

			 /*add Uers*/  
            $( "#add-user" ).submit(function(event) {

            	
				event.preventDefault();
				var currentRequest = null;    
					currentRequest=$.ajax({
					type: 'POST',
					url: '/add-user',
					data: $('#add-user').serialize(),
					dataType: "json",
					beforeSend: function(){
					if(currentRequest != null) {
                    currentRequest.abort();
       				}
        			$('#loading').show();
                    },
					success: function(response){
						$('#loading').hide();
						validationError(response);
						
                    },
         			error: function() {
         				console.log('error');
         			}
         		})

         		
			});

		 
			
			$("tr td #list").on("click", function(){
		        var dataId = $(this).attr("data-id");
		        var trId = $(this).attr("data-id");
		        $.ajax({
    			url: '/add-cat/'+dataId,
    			type: 'DELETE',
    			contentType: "application/json; charset=utf-8",
                success: function(result) {
                	$('#trid_'+result.id).hide();
                	$.toast({
				    text: result.message, // Text that is to be shown in the toast
				    heading: 'Note', // Optional heading to be shown on the toast
				    icon: 'danger', // Type of toast icon
				    showHideTransition: 'fade', // fade, slide or plain
				    allowToastClose: true, // Boolean value true or false
				    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
				    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
				    position: 'bottom-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
				    textAlign: 'left',  // Text alignment i.e. left, right or center
				    loader: true,  // Whether to show loader or not. True by default
				    loaderBg: '#9EC600' // will be triggered after the toast has been hidden
					});
       			
    			}
				});
		        //console.log("The data-id of clicked item is: " + dataId);
		    });
			$("tr td #listrole").on("click", function(){
		        var dataId = $(this).attr("data-id");
		        var trId = $(this).attr("data-id");
		        $.ajax({
    			url: '/add-role/'+dataId,
    			type: 'DELETE',
    			contentType: "application/json; charset=utf-8",
                success: function(result) {
                	$('#trid_'+result.id).hide();
                	$.toast({
				    text: result.message, // Text that is to be shown in the toast
				    heading: 'Note', // Optional heading to be shown on the toast
				    icon: 'danger', // Type of toast icon
				    showHideTransition: 'fade', // fade, slide or plain
				    allowToastClose: true, // Boolean value true or false
				    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
				    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
				    position: 'bottom-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
				    textAlign: 'left',  // Text alignment i.e. left, right or center
				    loader: true,  // Whether to show loader or not. True by default
				    loaderBg: '#9EC600' // will be triggered after the toast has been hidden
					});
       			
    			}
				});
		        //console.log("The data-id of clicked item is: " + dataId);
		    });
		    $("tr td #listCountry").on("click", function(){
		        var dataId = $(this).attr("data-id");
		        var trId = $(this).attr("data-id");
		        $.ajax({
    			url: '/add-countries/'+dataId,
    			type: 'DELETE',
    			contentType: "application/json; charset=utf-8",
                success: function(result) {
                	$('#trid_'+result.id).hide();
                	$.toast({
				    text: result.message, // Text that is to be shown in the toast
				    heading: 'Note', // Optional heading to be shown on the toast
				    icon: 'danger', // Type of toast icon
				    showHideTransition: 'fade', // fade, slide or plain
				    allowToastClose: true, // Boolean value true or false
				    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
				    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
				    position: 'bottom-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
				    textAlign: 'left',  // Text alignment i.e. left, right or center
				    loader: true,  // Whether to show loader or not. True by default
				    loaderBg: '#9EC600' // will be triggered after the toast has been hidden
					});
       			
    			}
				});
		        //console.log("The data-id of clicked item is: " + dataId);
		    });

		    $( "#updateProfile" ).submit(function(event) {
				event.preventDefault();
				console.log($('#updateProfile').serialize());
				var currentRequest = null;    
					currentRequest=$.ajax({
					type: 'POST',
					url: '/user-profile',
					data: $('#updateProfile').serialize(),
					dataType: "json",
					beforeSend: function(){
					if(currentRequest != null) {
                    currentRequest.abort();
       				}
        			$('#loading').show();
                    },
					success: function(response){
						console.log(response);
						$('#loading').hide();
						$.toast({
					    text: response.message, // Text that is to be shown in the toast
					    heading: 'Note', // Optional heading to be shown on the toast
					    icon: 'success', // Type of toast icon
					    showHideTransition: 'fade', // fade, slide or plain
					    allowToastClose: true, // Boolean value true or false
					    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
					    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
					    position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
					    textAlign: 'left',  // Text alignment i.e. left, right or center
					    loader: true,  // Whether to show loader or not. True by default
					    loaderBg: '#9EC600' // will be triggered after the toast has been hidden
						});
						//location.reload();
						
                    },
         			error: function() {
         				console.log('error');
         			}
         		})

			});	
            // Check browser support
			if (typeof(Storage) !== "undefined") {
				document.getElementById("name").innerHTML = localStorage.getItem("name");
			} else {
			
			  document.getElementById("name").innerHTML = "Sorry, your browser does not support Web Storage...";
			}

			

		  } );




        
    
