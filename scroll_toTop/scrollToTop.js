var scrollToTop=(function(){

	'use strict';
	var  intervalid,mid,delta;

		function scrollUp(){

			if(window.scrollY===0){
				clearInterval(intervalid);
			}

			if(window.scrollY>mid){
					delta=delta+5;
			}else{
				delta=delta-5;
			
				if(delta<10){
					delta=10;
				}

			}
			 delta=window.scrollY>delta?delta:window.scrollY;
			
			
			window.scrollTo(window.scrollX,window.scrollY-delta);
		}


	function onElClicked(e){
		e.preventDefault();
		mid=window.scrollY/2;
		delta=10;
		intervalid=setInterval(scrollUp,100);
	}

	function init(id){
		if(id===undefined||document.getElementById(id)===null){
			throw new Error("Please pass a valid id!");
		}
		document.getElementById(id).addEventListener("click",onElClicked);
	}
return{
	init:init
}
})();