class logic {
constructor(app){
this.app=app;
this.app.createCanvas(1700,935)
this.fondo=this.app.loadImage("src/Images/fondo.jpg")
this.inicio=this.app.loadImage("src/Images/Pantalla 1.jpg")
this.pantalla=0;
this.font=this.app.loadFont("src/Font/MoonbrightDemo-1GGn2.ttf")


} 
draw(){
   this.app.textFont(this.font)
    switch(this.pantalla){
      case 0: 
      this.app.image(this.inicio,0,0)
      this.app.text("Leer",770,670)
      this.app.textSize(110)
    }
    
}



}