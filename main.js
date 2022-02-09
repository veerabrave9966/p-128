song="";
lwx="";
lwy="";
rwx="";
rwy="";

function preload(){
    song=loadSound("LISA-MONEY.mp3")
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0,600, 500);
}

function play(){
    song.play();
    song.setvolume(1);
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        lwx= results[0].pose.leftWrist.x;
        lwy= results[0].pose.leftWrist.y;
        rwx= results[0].pose.rightWrist.x;
        rwy= results[0].pose.rightWrist.y;
        console.log("leftWristX= " + lwx + "leftWristY= " + lwy);
        console.log("rightWristX= " + rwx + "rightWristY= " + rwy);
    }
}