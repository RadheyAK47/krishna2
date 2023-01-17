noseX=0;
noseY=0

handX=0;
handY=0

function preload(){
    filter=loadImage("filter2.png")
    filter2=loadImage("filter sud.png")

}

function setup(){
    canvas=createCanvas(700,650);
    canvas.center();

    video=createCapture(VIDEO)
    video.size(700,650)
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,700,650)

    image(filter,noseX,noseY,470,260);

    image(filter2,handX,handY,450,260);

}

function modelLoaded(){
    console.log("posenet is loaded")
}

function gotPoses(results){
  if(results.length>0) {
    console.log(results);
    noseX=results[0].pose.nose.x-240;
    noseY=results[0].pose.nose.y-260;

    handX=results[0].pose.rightWrist.x-207;
    handY=results[0].pose.rightWrist.y-320;
} 
}

function take_snapshot(){
    save("Krishna.png");
}