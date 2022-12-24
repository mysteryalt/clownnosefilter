noseX = 0
noseY = 0

function setup() {
canvas = createCanvas(400,300);
canvas.center()
video = createCapture(VIDEO);
video.size(400,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses );
}

function draw() {
image(video , 0 , 0 , 400 , 300);
//fill(255 ,0,0);
//stroke(255,0,0);
//circle(noseX , noseY , 25) 
image(nose , noseX - 10, noseY - 10, 25,25)
}

function preload() {
nose = loadImage('https://i.postimg.cc/dtZfxpLG/1201411-middle.png')
}

function modelLoaded() {
    console.log("PoseNet is intialised")
}

function gotPoses(results) {
if (results.length > 0 ) {
console.log(results);

console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y)

noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
}


}

function filterclick() {
save('clownnose.png')
}