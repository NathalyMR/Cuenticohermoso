
new p5(function(app){
var logica;
app.setup=function(){
    logica=new logic(app);
} 
app.draw=function(){
    logica.draw();
}
app.mousePressed=function(){
    logica.mousePressed();
}
app.keyPressed=function(){
    logica.keyPressed();
}
app.mouseDragged=function(){
    logica.mouseDragged();
}}
);