var MoveDiv=(function(){
	'use strict';
	var el,left,top;


	function moveLeft(){
		el.style.left=left-10+"px";
		left=left-10;

	}

	function moveRight(){
		el.style.left=left+10+"px";
		left=left+10;

	}

	
	function moveUp(){
		el.style.top=top-10+"px";
		top=top-10;
	}

	function moveDown(){
		el.style.top=top+10+"px";
		top=top+10;
		
	}

	function isGameOver(){

		var boundingRec=document.getElementById("wrapper").getBoundingClientRect();
		var right=el.getBoundingClientRect().right;
		var bottom=el.getBoundingClientRect().bottom;

		if(left===boundingRec.left||right>=boundingRec.right||top===boundingRec.top||bottom>=boundingRec.bottom){
			return true;
		}
		return false;
	}
	function move(e){
		e.preventDefault();

		if(isGameOver()){
			alert("Game is Over!");
		}
		else{
			switch(e.keyCode){
				case 37: moveLeft();
							break;
				case 38 : moveUp();
							break;
				case 39	: moveRight();
							break;
				case 40	: moveDown();
							break;
			}
		}
 
	}
	function init(id){
		
		console.log("yogesh");
		if(id===undefined||document.getElementById(id)===null)
			throw new Error("Please pass a valid id!")
	
		el=document.getElementById(id);
		top=el.getBoundingClientRect().top;
		left=el.getBoundingClientRect().left;
		document.body.addEventListener("keydown",move);
	}

return{
	init:init
}
})();