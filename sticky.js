let sticky = document.querySelector("#sticky");


sticky.addEventListener("click",function(){
    stickyNote();
});

function stickyNote(imageElement){
    
    let stickyDiv = document.createElement("div");
    stickyDiv.classList.add("sticky-div");
    stickyDiv.innerHTML = `<div class="sticky-bar">
    <div class="close"></div>
    <div class="minimise"></div>
</div>`


   let minimise = stickyDiv.querySelector(".minimise");
   let close = stickyDiv.querySelector(".close");

   let stickyContent; //    = stickyDiv.querySelector(".sticky-content");

   if(imageElement){
    let stickyImageDiv = document.createElement("div");
    stickyImageDiv.classList.add("sticky-image-div");
    stickyDiv.append(stickyImageDiv);
    stickyImageDiv.append(imageElement);
    stickyContent = stickyImageDiv;
   }else{
    // <div class="sticky-content" contenteditable="true"></div> 
    let stickyContentDiv = document.createElement("div");
    stickyContentDiv.classList.add("sticky-content");
    stickyContentDiv.setAttribute("contenteditable" , "true");
    stickyDiv.append(stickyContentDiv);
    stickyContent = stickyContentDiv;
   }

   minimise.addEventListener("click",function(){
    stickyContent.style.display == "none" ? (stickyContent.style.display = "block") : (stickyContent.style.display = "none");
   });

    close.addEventListener("click",function(){
        stickyDiv.remove();
    });

    //Sticky movement
    let stickyHold = false;
    let initialX;
    let initialY;
    let stickyHeader = stickyDiv.querySelector(".sticky-bar");
    stickyHeader.addEventListener("mousedown", function (e) {
        stickyHold=true;
        initialX = e.clientX;
        initialY = e.clientY;
    });
  
    stickyHeader.addEventListener("mousemove", function (e) {
        if(stickyHold){
            let finalX = e.clientX;
            let finalY = e.clientY;
      
            let dx = finalX - initialX;
            let dy = finalY - initialY;
      
            let {top , left} = stickyDiv.getBoundingClientRect();
            //   sticky => top + dy
            //  sticky => left + dx
            stickyDiv.style.top = top + dy + "px";
            stickyDiv.style.left = left +dx + "px";
      
            initialX = finalX;
            initialY = finalY;
        }
    });
  
    stickyHeader.addEventListener("mouseup", function (e) {
        stickyHold = false;
    });
   document.body.append(stickyDiv);
}