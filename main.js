song1="";
song2="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song1leftWrist = 0;
song2rightWrist = 0;
function preload(){
//    song1 = loadSound("");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill("FF0000")
    stroke("FF0000")
    
    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);
        volume = remove_decimals/500;
        document.getElementById("song1").innerHTML = "song1 = " + song1;
        song.setsong1(song1);

        circle(rightWristX,rightWristY,20);
        InNumberrightWristY = Number(rightWristY);
        remove_decimals = floor(InNumberrightWristY);
        volume = remove_decimals/500;
        document.getElementById("song2").innerHTML = "song2 = " + song2;
        song.setsong2(song2);
    }
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
        scoreleftWrist = results[0].pose.keypoints[9].score;         
    }
}