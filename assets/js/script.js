$(function(){



	/* 
 * =============================================================
 * Placeholder text on older browsers
 * =============================================================
 */

	$('input').focus(function(){
	    $(this).val('');
	}).blur(function(){
	    if($(this).val() == "")
	    {
	        $(this).val($(this).attr('placeholder'))
	    }
	}
	);
	
	
	
	
	
	
	
	
	
 /* 
 * =============================================================
 * Select Boxes
 * =============================================================
 */

				$("#create").click( function() {
									$("SELECT").selectBox();
								});

								$("#destroy").click( function() {
									$("SELECT").selectBox('destroy');
								});

								$("#enable").click( function() {
									$("SELECT").selectBox('enable');
								});

								$("#disable").click( function() {
									$("SELECT").selectBox('disable');
								});

								$("#serialize").click( function() {
									$("#console").append('<br />-- Serialized data --<br />' + $("FORM").serialize().replace(/&/g, '<br />') + '<br /><br />');
									$("#console")[0].scrollTop = $("#console")[0].scrollHeight;
								});

								$("#value-1").click( function() {
									$("SELECT").selectBox('value', 1);
								});

								$("#value-2").click( function() {
									$("SELECT").selectBox('value', 2);
								});

								$("#value-2-4").click( function() {
									$("SELECT").selectBox('value', [2, 4]);
								});

								$("#options").click( function() {
									$("SELECT").selectBox('options', {

										'Opt Group 1': {
											'1': 'Value 1',
											'2': 'Value 2',
											'3': 'Value 3',
											'4': 'Value 4',
											'5': 'Value 5'
										},
										'Opt Group 2': {
											'6': 'Value 6',
											'7': 'Value 7',
											'8': 'Value 8',
											'9': 'Value 9',
											'10': 'Value 10'
										},
										'Opt Group 3': {
											'11': 'Value 11',
											'12': 'Value 12',
											'13': 'Value 13',
											'14': 'Value 14',
											'15': 'Value 15'
										}

									});
								});

								$("#default").click( function() {
									$("SELECT").selectBox('settings', {
										'menuTransition': 'default',
										'menuSpeed' : 0
									});
								});

								$("#fade").click( function() {
									$("SELECT").selectBox('settings', {
										'menuTransition': 'fade',
										'menuSpeed' : 'fast'
									});
								});

								$("#slide").click( function() {
									$("SELECT").selectBox('settings', {
										'menuTransition': 'slide',
										'menuSpeed' : 'fast'
									});
								});


								$("SELECT")
									.selectBox()
									.focus( function() {
										$("#console").append('Focus on ' + $(this).attr('name') + '<br />');
										$("#console")[0].scrollTop = $("#console")[0].scrollHeight;
									})
									.blur( function() {
										$("#console").append('Blur on ' + $(this).attr('name') + '<br />');
										$("#console")[0].scrollTop = $("#console")[0].scrollHeight;
									})
									.change( function() {
										$("#console").append('Change on ' + $(this).attr('name') + ': ' + $(this).val() + '<br />');
										$("#console")[0].scrollTop = $("#console")[0].scrollHeight;
									});
									
									
	
	
	
	
 /* 
 * =============================================================
 * FAQ Arrows
 * =============================================================
 */

	$('.faq-show-hide').hide();

	$('.faq-click a').toggle(function() {
	    $(this)
	        .closest('li')
	        .find('.faq-show-hide')
	        .slideDown();
	    return false;
	}, function() {
	    $(this)
	        .closest('li')
	        .find('.faq-show-hide')
	        .slideUp();
	    return false;
	});
		
								
								


	/* 
	 * =============================================================
	 * How Map Works Calculations
	 * =============================================================
	 */

	var btn = document.getElementById('calculate');
	btn.onclick = function() {
	    // get the input values
	    var val1 = parseInt(document.getElementById('val1').value);
	    // get the elements to hold the results
	    var result1 = document.getElementById('result1');
	    var result2 = document.getElementById('result2');
	        var result3 = document.getElementById('result3');
	        var result4 = document.getElementById('result4');
	    // create an empty array to hold error messages
	    var msg = [];
	    // check each input value, and add an error message
	    // to the array if it's not a number
	    if (isNaN(val1)) {
	        msg.push('That is not a number.');
	    }
	    // if the array contains any values, display the error message(s)
	    // as a comma-separated string in the first <span> element
	    if (msg.length > 0) {
	        result1.innerHTML = msg.join(', ');
	    } else {
	        // otherwise display the results in the <span> elements
	        result1.innerHTML = val1 * .10;
	        result2.innerHTML = val1 * .03;
	                result3.innerHTML = '995 '
	                result4.innerHTML = [(val1 * .10) + (val1 * .03) + 995];
	    }
	};
	
	
	
	/* 
	 * =============================================================
	 * Slider
	 * =============================================================
	 */
	
	$('.flexslider').flexslider({
	    animation: "slide"
	  });
		
		
	
	
}); //end ready function