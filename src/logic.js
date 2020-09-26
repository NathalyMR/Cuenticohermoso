class logic {
constructor(app){
this.app=app;
this.app.createCanvas(1530,754)
this.fondo=this.app.loadImage("src/Images/fondo.jpg")
this.inicio=this.app.loadImage("src/Images/Pantalla 1.jpg")
this.pantalla=0;
this.font=this.app.loadFont("src/Font/MoonbrightDemo-1GGn2.ttf")


} 
draw(){
   this.app.textFont(this.font)
   this.app.fill(255)
    switch(this.pantalla){
      case 0: 
      this.app.image(this.inicio,0,0)
      this.app.text("Leer",698,550)
      this.app.textSize(110)

      break;
      
      case 1:
      this.app.image(this.fondo,0,0)

      break;
    }

}
clic(){
    switch(this.pantalla){
        case 0:
            if(this.app.mouseX>=501 && this.app.mouseX<=1029 && this.app.mouseY>=363 && this.app.mouseY<=694){
                this.pantalla=1


            }
    }


}


}