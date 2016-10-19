var cursorDirection=(function(){
      
      var direction,oldX,oldY;
      var error_margin=10;
      
      function getDirection(){
              return direction;
            }
      
      function onMouseMove(e){
              if(oldX===undefined){
                        oldX=e.pageX;
                        oldY=e.pageY;
                        return;
                      }
        if(e.pageX<oldX&&Math.abs(oldY-e.pageY)<=error_margin){
                          direction='l';
                      }
              
        else if(e.pageY<oldY&&Math.abs(oldX-e.pageX)<=error_margin){
                         direction='t';
                     }
              
        else if(e.pageY>oldY&&Math.abs(oldX-e.pageX)<=error_margin){
                          direction='b';
                      }
              
        else if(e.pageX>oldX&&Math.abs(oldY-e.pageY)<=error_margin){
                         direction='r';
                     }
        
        else if(e.pageX<oldX&&e.pageY<oldY){
                    direction='t-l';
                  }  
             
        else if(e.pageX<oldX&&e.pageY>oldY){
                        direction='b-l';
                      }  
            
        else if(e.pageX>oldX&&e.pageY<oldY){
                        direction='t-r';
                      }  
               
              
        else if(e.pageX>oldX&&e.pageY>oldY){
                        direction='b-r';
                      }  
            
        
          console.log(direction);
             
         
        oldX=e.pageX;
        oldY=e.pageY;
              
            }
      
      
      function init(){
              document.addEventListener("mousemove",onMouseMove);
            }
     
   
    return{
              init:init,
              getDirection:getDirection
            }
})();
