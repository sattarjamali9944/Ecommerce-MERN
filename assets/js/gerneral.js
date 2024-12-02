/*Delete Category */

		$(document).ready(function() {
			
			$("tr td #list").on("click", function(){
		        var dataId = $(this).attr("data-id");
		        $.ajax({
    			url: '/add-cat/'+dataId,
    			type: 'DELETE',
    			dataType: 'jsonp',
                success: function(result) {
       			console.log(""+result);
    			}
				});
		        //console.log("The data-id of clicked item is: " + dataId);
		    });


		 

