$(document).ready(function(){
	
  
	$(".hide").hide();

	 	

	$(".read-more").click(readMore);
	$(".read-less hide").click(readLess);
  	$(".learn-more").click(learnMore);
	$(".learn-more-text").click(learnLess);
  
	function readMore(){
		$(".read-more").hide();
		$("#show-this-click").slideDown();
		$("#show-this-click").show();
    	$(".read-less").show();
    
	}
  
  function readLess(){
    $("#show-this-click").hide();
    $(".read-less").hide();
    $(".read-more").show();
  }
 
  
	function learnMore(){
		$(".learn-more").hide();
		$("#learn-more-text").slideDown();
		$("#learn-more-text").show();
    
	}
  
  function learnLess(){
    $("#learn-more-text").hide();
    $(".learn-more").show();
  }
})
