// JavaScript Document

$(document).ready(function() {
						   
						   
	//top dock nav
	
	$('#nav_share').click(function() {
 		
		$('#topbar').animate({'top': 0}, 200, 'easeOutCirc', function() {
					// Animation complete.
				});
		$('#closebox').animate({'top': 0}, 200, 'easeOutCirc', function() {
					// Animation complete.
				});
		$('#social_nav').animate({'top': 0}, 200, 'easeOutCirc', function() {
					// Animation complete.
				});
		$('#fancynav').animate({'top': '22px'}, 200, 'easeOutCirc', function() {
					// Animation complete.
				});
		
	});
	
	$('#closebox').click(function() {
		
		$('#topbar').animate({'top': '-22px'}, 200, 'easeOutCirc', function() {
					// Animation complete.
				});
		$('#closebox').animate({'top': '-22px'}, 200, 'easeOutCirc', function() {
					// Animation complete.
				});
		$('#social_nav').animate({'top': '-26px'}, 200, 'easeOutCirc', function() {
					// Animation complete.
				});
		$('#fancynav').animate({'top': 0}, 200, 'easeOutCirc', function() {
					// Animation complete.
				});
	});
						   
	
	//top nav convert anchors to scroll links
	function filterPath(string) {
			return string
			.replace(/^\//,'')
			.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
			.replace(/\/$/,'');
		}
	
		var locationPath = filterPath(location.pathname);
		//var scrollElem = scrollableElement('html','body');
		var scrollElem = 'html, body';
	
		$.each( $('.nav_item'),  function() {
		
			var thisPath = filterPath(this.pathname) || locationPath;
			if (  locationPath == thisPath
				&& (location.hostname == this.hostname || !this.hostname)
				&& this.hash.replace(/#/,'') ) {

					var $target = $(this.hash), target = this.hash;
					
					if (target) {
	
						//var targetOffset = $target.offset().top - $('#topbar').height();
						var targetOffset = $target.offset().top;
						
						$(this).click(function(event) {
							event.preventDefault();
							$(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
								location.hash = target;
	
							});
						});
					}
			}
	
		});
	
		function scrollableElement(els) {
			for (var i = 0, argLength = arguments.length; i <argLength; i++) {
				var el = arguments[i],
				$scrollElement = $(el);
				if ($scrollElement.scrollTop()> 0) {
					return el;
				} else {
					$scrollElement.scrollTop(1);
					var isScrollable = $scrollElement.scrollTop()> 0;
					$scrollElement.scrollTop(0);
					if (isScrollable) {
						return el;
					}
				}
			}
			return [];
		}



	//highlight selected nav
	$('.section_container').waypoint(function(direction) {
			if( direction == "down"){
				$('.nav_item').removeClass('selected');
		 		whichNav = this.id;
		 		whichNav = "#nav_" + whichNav;
				 $(whichNav).addClass('selected');
			}
	}, {offset:"2px"});
	
	$('.section_container').waypoint(function(direction) {
			if( direction == "up"){
				$('.nav_item').removeClass('selected');
		 		whichNav = this.id;
		 		whichNav = "#nav_" + whichNav;
				 $(whichNav).addClass('selected');
			}
	}, {offset:"-2px"});
	
	
	
	//$('.section_container').waypoint(function() {
  		// $('.nav_item').removeClass('selected');
		// whichNav = this.id;
		// whichNav = "#nav_" + whichNav;
		// $(whichNav).addClass('selected');
	//}, {offset:"2px"});
	
	$('#section_home').waypoint(function() {
  		 $('.nav_item').removeClass('selected');
	}, {offset:"-30%"});
	
	
});

/* Tooltip code - based on Coda Popup sample code from Jorge Mesa - http://jqueryfordesigners.com/coda-popup-bubbles/ */
$(function () {
  $('.toolTipWrapper').each(function () {
    // options
    var distance = 10;
    var time = 250;
    var hideDelay = 500;

    var hideDelayTimer = null;

    // tracker
    var beingShown = false;
    var shown = false;
    
    var trigger = $('.trigger', this);
    var popup = $('.popup', this).css('opacity', 0);

    // set the mouseover and mouseout on both element
    $([trigger.get(0), popup.get(0)]).mouseover(function () {
														  
	var offSetHeight = popup.height(); // AW - used to offset the popup relative to the height of the popup content
	var offSetWidth = popup.width() - trigger.width();
														  
      // stops the hide event if we move from the trigger to the popup element
      if (hideDelayTimer) clearTimeout(hideDelayTimer);

      // don't trigger the animation again if we're being shown, or already visible
      if (beingShown || shown) {
        return;
      } else {
        beingShown = true;

        // reset position of popup box
        popup.css({
          top: -(offSetHeight + 20),
          left: -(offSetWidth * .5), //AW - offset that bad boy to the left by 50% of popup width minus trigger width = centered
          display: 'block' // brings the popup back in to view
        })

        // (we're using chaining on the popup) now animate it's opacity and position
        .animate({
          top: '-=' + distance + 'px',
          opacity: 1
        }, time, 'swing', function() {
          // once the animation is complete, set the tracker variables
          beingShown = false;
          shown = true;
        });
      }
    }).mouseout(function () {
      // reset the timer if we get fired again - avoids double animations
      if (hideDelayTimer) clearTimeout(hideDelayTimer);
      
      // store the timer so that it can be cleared in the mouseover if required
      hideDelayTimer = setTimeout(function () {
        hideDelayTimer = null;
        popup.animate({
          top: '-=' + distance + 'px',
          opacity: 0
        }, time, 'swing', function () {
          // once the animate is complete, set the tracker variables
          shown = false;
          // hide the popup entirely after the effect (opacity alone doesn't do the job)
          popup.css('display', 'none');
        });
      }, hideDelay);
    });
  });
});
//##############################

 
 
 
 /* HORIZONTAL Tooltip code - based on Coda Popup sample code from Jorge Mesa - http://jqueryfordesigners.com/coda-popup-bubbles/ */
$(function () {
  $('.toolTipWrapperHorizontal').each(function () {
    // options
    var distance = 10;
    var time = 250;
    var hideDelay = 500;

    var hideDelayTimer = null;

    // tracker
    var beingShown = false;
    var shown = false;
    
    var trigger = $('.trigger', this);
    var popup = $('.popup', this).css('opacity', 0);

    // set the mouseover and mouseout on both element
    $([trigger.get(0), popup.get(0)]).mouseover(function () {
														  
	var offSetHeight = popup.height() * .7; // AW - used to offset the popup relative to the height of the popup content
	//var offSetWidth = popup.width() - trigger.width();
	var offSetWidth = popup.width() * .2;
														  
      // stops the hide event if we move from the trigger to the popup element
      if (hideDelayTimer) clearTimeout(hideDelayTimer);

      // don't trigger the animation again if we're being shown, or already visible
      if (beingShown || shown) {
        return;
      } else {
        beingShown = true;

        // reset position of popup box
        popup.css({
          top: -(offSetHeight),
          left: offSetWidth, 
          display: 'block' // brings the popup back in to view
        })

        // (we're using chaining on the popup) now animate it's opacity and position
        .animate({
          left: '+=' + distance + 'px',
          opacity: 1
        }, time, 'swing', function() {
          // once the animation is complete, set the tracker variables
          beingShown = false;
          shown = true;
        });
      }
    }).mouseout(function () {
      // reset the timer if we get fired again - avoids double animations
      if (hideDelayTimer) clearTimeout(hideDelayTimer);
      
      // store the timer so that it can be cleared in the mouseover if required
      hideDelayTimer = setTimeout(function () {
        hideDelayTimer = null;
        popup.animate({
          left: '+=' + distance + 'px',
          opacity: 0
        }, time, 'swing', function () {
          // once the animate is complete, set the tracker variables
          shown = false;
          // hide the popup entirely after the effect (opacity alone doesn't do the job)
          popup.css('display', 'none');
        });
      }, hideDelay);
    });
  });
});
//##############################



 
 //waypoint animations #############
 
   // animate in on down scroll
	$('#section_one').waypoint(function(direction) {
			if( direction == "down"){
				$('#section_one .section_textbox').animate({'left': '25%'}, 400, 'easeOutCirc', function() {
					// Animation complete.
				});
				
				$('#section_one .h2_topbar').fadeIn(400, 'easeOutCirc',function(){  		
					$('#section_one .h2_bottombar').fadeIn('fast').animate({top:'100%'}, 300, 'easeOutCirc',function(){  
						$("#section_one .h2_container h2").fadeIn(300)
					});	
				});
			}
	}, {offset:"70%"});
	
	
	$('#section_two').waypoint(function(direction) {
		
			if( direction == "down"){
				$('#section_two .section_textbox').animate({'left': 0}, 400, 'easeOutCirc', function() {
					// Animation complete.
				});
				
				$('#section_two .h2_topbar').fadeIn(300, 'easeOutCirc',function(){  
					
					$('#section_two .h2_bottombar').fadeIn('fast').animate({top:'100%'}, 300, 'easeOutCirc',function(){  
					$("#section_two .h2_container h2").fadeIn(300)
				});
					
				});
			}
			
	}, {offset:"70%"});
	


// How it Works Animations ###########################

function animate_hiw_2() {
			$('#hiw_num_2').animate({'color': '#ed145b'}, 200, 'easeOutCirc', function() {
					$('#hiw_2').animate({'width': '30%'}, 300, 'easeOutCirc', function() {
						$('#hiw_num_2').animate({'color': '#5a5748'}, 100, 'easeOutCirc', function() {
							animate_hiw_3();
						});
					});
				});
};

function animate_hiw_3() {
			$('#hiw_num_3').animate({'color': '#ed145b'}, 200, 'easeOutCirc', function() {
					$('#hiw_3').animate({'width': '30%'}, 300, 'easeOutCirc', function() {
						$('#hiw_num_3').animate({'color': '#5a5748'}, 100, 'easeOutCirc', function() {
							// Animation complete.
						});
					});
				});
};

	// animate in on down scroll 
	
	var debut = "Y";
	
	$('#section_three').waypoint(function(direction) {
		
			if( direction == "down" && debut == "Y"){
				//$('#section_three .dollaranimation').fadeIn('fast');	
				/*
				$('#hiw_num_1').animate({'color': '#ed145b'}, 200, 'easeOutCirc', function() {
					$('#hiw_1').animate({'width': '30%'}, 300, 'easeOutCirc', function() {
						$('#hiw_num_1').animate({'color': '#5a5748'}, 100, 'easeOutCirc', function() {
							animate_hiw_2();
						});
					});
				});	
				*/
				debut =  "N";
			}
			
			
	}, {offset:"50%"});


/* Vimeo API controls */
/*
var f = $('iframe'),
    url = f.attr('src').split('?')[0],
    status = $('.status');
*/

// Listen for messages from the player
if (window.addEventListener){
    window.addEventListener('message', onMessageReceived, false);
}
else {
    window.attachEvent('onmessage', onMessageReceived, false);
}

// Handle messages received from the player
function onMessageReceived(e) {
    var data = JSON.parse(e.data);
    
    switch (data.event) {
        case 'ready':
            onReady();
            break;
           
        case 'playProgress':
            onPlayProgress(data.data);
            break;
            
        case 'pause':
            onPause();
            break;
           
        case 'finish':
            onFinish();
            break;
    }
}

// Call the API when a button is pressed
$('#video_circle').on('click', function() {
    post( 'play');
	$(this).addClass('hideme');
	$('#video_mask').addClass('hideme');
});

// Helper function for sending a message to the player
function post(action, value) {
    var data = { method: action };
    
    if (value) {
        data.value = value;
    }
    
    f[0].contentWindow.postMessage(JSON.stringify(data), url);
}

function onReady() {
    
    
    post('addEventListener', 'pause');
    post('addEventListener', 'finish');
    post('addEventListener', 'playProgress');
}

function onPause() {
    //$('#video_circle').removeClass('hideme');
}

function onFinish() {
    //$('#video_circle').removeClass('hideme');
}

function onPlayProgress(data) {
    
}
