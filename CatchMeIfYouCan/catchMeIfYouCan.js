var catchMeIfYouCan=(function(){
  
  var el,left,top, boundingRec,height,width;
  
  function isClose(x,y){
   
     boundingRec=el.getBoundingClientRect();
    console.log(boundingRec);
    
    return (x>=(boundingRec.left-20)&&x<=(boundingRec.right+20)&&y>=(boundingRec.top-20)&&y<=(boundingRec.bottom+20))?true:false;
    
  }
  
  function isCornered(){
    console.log("check");
    boundingRec=el.getBoundingClientRect();
    console.log(boundingRec);
    var el1=document.body;
    if(boundingRec.left<=0||boundingRec.top<=0||boundingRec.right>=width||boundingRec.bottom>=height){
     //console.log(boundingRec);
      return true;
    }
  return false;
  }
  
  function moveButton(e){
 
    
    if(isClose(e.pageX,e.pageY)===false){
     return;
    }
    
    if(isCornered()===true){
      left=width/2;
      top=height/2;
      el.style.left=left+"px";
      el.style.top=top+"px";
      return;
      
    }
  var dir=cursorDirection.getDirection();


    if(dir==='l'){


      el.style.left=left-10+"px";
      left=left-10;
    }
     else if(dir==='r'){
    
     if(width-el.getBoundingClientRect().right<150){
      left=width/2;
      top=height/2;
      el.style.left=left+"px";
      el.style.top=top+"px";
      
     }
      else{ el.style.left=left+10+"px";
      left=left+10;
    }
    
    }
    
          else if(dir==='t'){
        el.style.top=top-10+"px";
      top=top-10;
    }
  
     else if(dir==='b'){
     if(height-el.getBoundingClientRect().bottom<46){
      left=width/2;
      top=height/2;
      el.style.left=left+"px";
      el.style.top=top+"px";
      
     }
      
   
   else{
        el.style.top=top+10+"px";
      top=top+10;
   }

    }
  else if(dir==='t-l'){
    el.style.top=top-10+"px";
    el.style.left=left-10+"px";
    left=left-10;
    top=top-10;
  }
  
  else if(dir==="t-r"){
    el.style.top=top-10+"px";
    el.style.left=left+10+"px";
    left=left+10;
    top=top-10;
    
  }
  else if(dir==="b-l"){
    el.style.top=top+10+"px";
    el.style.left=left-10+"px";
    top=top+10;
    left=left-10;
  }
    else{
      el.style.top=top+10+"px";
      el.style.left=left+10+"px";
      left=left+10;
      top=top+10;
    }
  
  
  }
  
  
  
  function init(id){
    
    console.log("init");
  cursorDirection.init();
    el=document.getElementById(id);
    left=el.getBoundingClientRect().left;
    top=el.getBoundingClientRect().top;
var body = document.body,
    html = document.documentElement;

 height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

    
    
    
    top=height/2;
    
     width=Math.max(document.documentElement["clientWidth"], document.body["scrollWidth"], document.documentElement["scrollWidth"], document.body["offsetWidth"], document.documentElement["offsetWidth"]);
    
    console.log(width);
    left=width/2;
    
    
   el.style.left=left+"px";
    el.style.top=top+"px";
    document.addEventListener("mousemove",moveButton);
  }
  
  return{
    init:init
  }
})();
