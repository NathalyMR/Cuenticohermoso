class logic {
constructor(app){
this.app=app;
this.app.createCanvas(1700,935)
this.fondo=this.app.loadImage("src/Images/fondo.jpg")




} 
draw(){
    this.app.image(this.fondo,0,0)
    
}



}