function preload() {
    classifier = ml5.iamgeClassifier('DoodleNet');
}
function draw() {
    strokeWeight(13);
    stroke("yellow");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseY, mouseX);
    }
}
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.SpeechSynthesis;

}
function clearCanvas() {
    background("white");
}
function classifiyCanvas() {
    classifier.classify(canvas, gotResult);
}
function gotResult(error, results) {
    if (error) { console.error(error); 
    }
     console.log(results);
     document.getElementById('label').innerHTML = 'Label: ' + results[0].label; 
     document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%'; 
     utterThis = new SpeechSynthesisUtterance(results[0].label);
     synth.speak(utterThis);
}