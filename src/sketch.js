
new p5(function(app){
var logica;
app.setup=function(){
    logica=new logic(app);
} 
app.draw=function(){
    logica.draw();
}
app.mousePressed=function(){
    logica.clic();
}
app.keyPressed=function(){
    logica.keyPressed();
}
app.mouseDragged=function(){
    logica.clicsostenido();
}
app.mouseReleased=function(){
    logica.clicsuelto();
}

}
);