let photoDiv = document.querySelector("#photo");
let downloadDiv = document.querySelector("#download");


let photoInput = document.querySelector("#photo-upload");
photoDiv.addEventListener("click",function(){
    photoInput.click();
})
photoInput.addEventListener("change",function(e){
  let fileObj = event.target.files[0];
  console.log(fileObj);
  let filePath = URL.createObjectURL(fileObj, { type: "image/jpg" });
  let img = document.createElement("img");
  img.setAttribute("src", filePath);
  img.classList.add("sticky-image");
  stickyNote(img);
})
downloadDiv.addEventListener("click",function(){
    let aTag = document.createElement("a");
    let fileURL = canvas.toDataURL("image/jpg");
    aTag.href = fileURL;
    aTag.download = "canvas.jpg";
    aTag.click();
})