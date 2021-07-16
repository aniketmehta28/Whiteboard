let canvasElem = document.querySelector("#canvas");



// RESIZING
canvasElem.width = window.innerWidth;
canvasElem.height = window.innerHeight - 100;

window.addEventListener("resize",function(){
    canvasElem.width = window.innerWidth;
    canvasElem.height = window.innerHeight - 100;
})
// console.log(ctx);   

// 2d elem board 

let ctx = canvasElem.getContext("2d");
// ctx.fillStyle = 'white';
// ctx.fillRect(10, 10, 150, 100);
//         (xoffset,yoffset,width,heiht)


//Drawing
let penDown = false;
let linesDB = [];
let line = [];
let reDo = [];
canvasElem.addEventListener("mousedown",function(e){
   let x = e.clientX;
   let y = e.clientY -100;
   if(reDo.length){
    reDo =[];
   }

   ctx.beginPath();
   ctx.moveTo(x,y);
   penDown = true;

   let lineObj = {
       x: x,
       y : y,
       event : "md",
       lineWidth: ctx.lineWidth,
       strokeStyle: ctx.strokeStyle,
   }

   line.push(lineObj);
});

canvasElem.addEventListener("mousemove",function(e){

   
    if(penDown){
        let x = e.clientX;
        let y = e.clientY-100;
    ctx.lineTo(x,y);
    ctx.stroke();
    let lineObj = {
        x: x,
        y : y,
        event : "mm"
       
    }
    line.push(lineObj);
   } 


 });

 canvasElem.addEventListener("mouseup",function(e){
     penDown = false;
     linesDB.push(line);
    //  console.log(linesDB);
     line = [];
 })