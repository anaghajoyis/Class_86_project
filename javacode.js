const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var block_img_object;
function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
    block_img_object=Img;
    block_img_object.scaleToWidth(700);
    block_img_object.scaleToHeight(510);
    block_img_object.set({
        top:0,left:0
    })
    canvas.add(block_img_object);
})	
	
}
document.getElementById("myAudio").onclick(playSound());
function playSound(){
	x.play();
    new_image()
}
