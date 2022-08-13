function setup()
{
    video = createCanvas(VIDEO);
    video.size(450, 420);
    canvas = createCanvas(450, 420);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw()
{
    background('#b4dea9');
}

function modelLoaded()
{
    console.log('PseNet is initialized.');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
    }
}