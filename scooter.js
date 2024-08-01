img = "";
status = "";

function preload()
{
  img = loadImage("IMG_20240723_212003");
}

function setup()
{
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
  console.log("Model is Loaded!");
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult()
{
  if(error)
    {
      console.log(error);
    }
   console.log(results); 
}