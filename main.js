function setup(){
    canvas=createCanvas(500,400);
    canvas.postion(500,600);

    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,400);
}