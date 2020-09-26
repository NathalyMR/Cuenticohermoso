class logic {
constructor(app){
this.app=app;
this.app.createCanvas(1530,754);
this.fondo=this.app.loadImage("src/Images/fondo.jpg");
this.inicio=this.app.loadImage("src/Images/Pantalla 1.jpg");
this.pantalla=0;
this.font=this.app.loadFont("src/Font/MoonbrightDemo-1GGn2.ttf");
this.final=this.app.loadImage("src/Images/Pantalla 3.jpg");
this.lobo=this.app.loadImage("src/Images/Lobo.png");
this.cerdo1=this.app.loadImage("src/Images/Cerdo 1.png");
this.cerdo2=this.app.loadImage("src/Images/Cerdo 2.png");
this.casa1=this.app.loadImage("src/Images/Casa 1.png");
this.casa2=this.app.loadImage("src/Images/Casa 2.png");
this.casa3=this.app.loadImage("src/Images/Casa 3.png");
this.gasolina=this.app.loadImage("src/Images/Gasolina.png");
this.roca=this.app.loadImage("src/Images/Roca.png");
this.pintarcasa=true;

this.lobox=0;
this.cerdo1x=822;
this.cerdo2x=1647;
this.casa1x=707;
this.casa2x=1529;
this.casa3x=2201;
this.rocax=1089;
this.gasolinax=2679;
this.fondox=0;
this.loboy=432;
this.posicionx=0;
this.posicony=0;

this.seleccion=false;
this.overlobo=false;

} 
draw(){
    
   this.app.textFont(this.font)
   this.app.fill(255)
    switch(this.pantalla){
     case 0: 
      this.app.image(this.inicio,0,0)
      this.app.text("Leer",690,550)
      this.app.textSize(110)

      break;
      
      case 1:
          
        if(this.app.mouseX>=this.lobox && this.app.mouseX<=(this.lobox+228)  && this.app.mouseY>=this.loboy && this.app.mouseY<=(this.loboy+233)){
            this.overlobo=true;
            
        }else{
            this.overlobo=false;

        }console.log(this.overlobo);
      this.app.image(this.fondo,this.fondox,0)
      //this.fondox-=1
      this.app.image(this.lobo,this.lobox,this.loboy)
      this.app.image(this.cerdo1,this.cerdo1x,375)
      this.app.image(this.cerdo2,this.cerdo2x,200) 
      
      if(this.pintarcasa==true){
        this.app.image(this.casa1,this.casa1x,175)


      }
      
      this.app.image(this.casa2,this.casa2x,136)
      this.app.image(this.casa3,this.casa3x,56)
      this.app.image(this.roca,this.rocax,281)
      this.app.image(this.gasolina,this.gasolinax,462)



      break;

      case 2:
          this.app.image(this.final,0,0)
          this.app.textSize(70)
          this.app.text("Leer", 1090, 260)
          this.app.text("de nuevo", 1050, 300)
          this.app.textSize(70)
          this.app.text("Decargar txt",1000,510)
          

      break;
    }

}
clic(){
    switch(this.pantalla){
        case 0:
            if(this.app.mouseX>=501 && this.app.mouseX<=1029 && this.app.mouseY>=363 && this.app.mouseY<=694){
                this.pantalla=1
            }

        break;  


        case 1:

        if (this.overlobo==true) {
            this.seleccion=true;
            
        } else{
            this.seleccion=false;
        } this.posiconx=this.app.mouseX-(this.lobox+114);
          this.posiciony=this.app.mouseY-this.loboy;
            
            if(this.app.mouseX>=734 && this.app.mouseX<=1092  && this.app.mouseY>=184 && this.app.mouseY<=612 && this.pantalla==1){
                this.pintarcasa=false;
            }
            
        
     break;


        case 2: 
            if(this.app.mouseX>=983 && this.app.mouseX<=1313 && this.app.mouseY>=210 && this.app.mouseY<=313){
                this.pantalla=1
            }

        break;         
            }
    }

clicsostenido(){
 if(this.seleccion){
     this.lobox=this.app.mouseX-this.posicionx;
     this.loboy=this.app.mouseY-this.posiciony;


 }


}

clicsuelto(){
this.seleccion=false;


}
}


