let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");

undo.addEventListener("click",removeContent);
redo.addEventListener("click",redofunc);

function redofunc(){
//   console.log(reDo); 
if(reDo.length){
    let currentLineWidth = ctx.lineWidth;
    let currentStrokeStyle = ctx.strokeStyle;
        let reDoLine = reDo.pop();
        // console.log(reDoLine);
        for(let i = 0; i< reDoLine.length;i++){
            let lineObj = reDoLine[i];
            if(lineObj.event == "md"){
                ctx.lineWidth = lineObj.lineWidth;
                ctx.strokeStyle = lineObj.strokeStyle;
                ctx.beginPath();
                ctx.moveTo(lineObj.x,lineObj.y);
                // console.log(pointobj.event);
            }else if(lineObj.event == "mm"){
             ctx.lineTo(lineObj.x,lineObj.y);
             ctx.stroke();
            }
        }
        linesDB.push(reDoLine);
        ctx.lineWidth = currentLineWidth;
        ctx.strokeStyle = currentStrokeStyle;
}
}
function removeContent(){
   let redoline =  linesDB.pop();
   reDo.push(redoline);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    reDraw();
}

function reDraw(){
    // console.log("HI");
    let currentLineWidth = ctx.lineWidth;
    let currentStrokeStyle = ctx.strokeStyle;
    for(let i = 0; i<linesDB.length;i++){
        let line = linesDB[i];
        for(let j= 0; j< line.length; j++){
            let pointobj = line[j];
            if(pointobj.event == "md"){
                ctx.lineWidth = pointobj.lineWidth;
                ctx.strokeStyle = pointobj.strokeStyle;
                ctx.beginPath();
                ctx.moveTo(pointobj.x,pointobj.y);
                // console.log(pointobj.event);
            }else if(pointobj.event == "mm"){
             ctx.lineTo(pointobj.x,pointobj.y);
             ctx.stroke();
            }
            
        }
    }
    ctx.lineWidth = currentLineWidth;
    ctx.strokeStyle = currentStrokeStyle;
}