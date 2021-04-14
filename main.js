canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if(width<992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").heigh=new_height;
    document.body.style.overflow="hidden";
}
var last_position_x, last_position_y;
var color="orange";
width_of_line=1;
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log("touchstart");
    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_y=e.touches[0].clientY-canvas.offsetTop;
    console.log(last_position_x, last_position_y);
}

canvas.addEventListener("touchmove",touch_move);
function touch_move(e){
    var current_position_x=e.touches[0].clientX-canvas.offsetLeft;
    var current_position_y=e.touches[0].clientY-canvas.offsetTop;
    
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.stroke();
    
    console.log("the last position of x and y="+last_position_x,last_position_y);
    ctx.moveTo(last_position_x,last_position_y);
    console.log("current position of x and y="+current_position_x,current_position_y);
     ctx.lineTo(current_position_x,current_position_y);
     ctx.stroke();

last_position_x=current_position_x;
last_position_y=current_position_y;
}