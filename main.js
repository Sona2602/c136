Status = "";
function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();

    video = createCapture(480,380);
    video.hide();
}
function draw()
{
    image(video,0,0,480,380);
}
function start()
{
    objectDetection = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_results = document.getElementById("to_find").value;
}
function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
}