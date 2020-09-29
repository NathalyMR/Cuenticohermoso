class logic {
constructor(app){
this.app=app;
this.app.createCanvas(1530,754);
this.fondo=this.app.loadImage("src/Images/fondo.jpg");
this.inicio=this.app.loadImage("src/Images/Pantalla 1.jpg");
this.pantalla=0;
this.font=this.app.loadFont("src/Font/MoonbrightDemo-1GGn2.ttf");
this.final=this.app.loadImage("src/Images/Pantalla 3.jpg");
this.cerdo1=this.app.loadImage("src/Images/Cerdo 1.png");
this.cerdo2=this.app.loadImage("src/Images/Cerdo 2.png");
this.casa2=this.app.loadImage("src/Images/Casa 2.png");
this.casa3=this.app.loadImage("src/Images/Casa 3.png");
this.gasolina=this.app.loadImage("src/Images/Gasolina.png");
this.flecha=this.app.loadImage("src/Images/Flecha.png");
this.fondo2=this.app.loadImage("src/Images/Fondo 2.jpg");
this.fondo3=this.app.loadImage("src/Images/Fondo3.jpg");


this.lobox=100;
this.cerdo1x=822;
this.cerdo2x=1647;
this.casa1x=707;
this.casa1y=175;
this.casa2x=1529;
this.casa3x=2201;
this.rocax=1089;
this.rocay=-1100;
this.gasolinax=2679;
this.fondox=0;
this.loboy=432;
this.posicionx=0;
this.posicony=0;
this.anchoroca=476;
this.altoroca=476;
this.anchocasa=410;
this.altocada=450;
this.ancholobo=228;
this.altolobo=233;


this.seleccion=false;
this.overlobo=false;
this.pintarcasa=true;
this.aplastarroca=false;
this.pintarroca=false;
this.restriccion1=true;
this.restriccion2=true;
this.restriccion3=true;
this.restriccion4=true;
this.pintarflecha=false;



this.casa1=new Obstaculo(app,this.casa1x,this.casa1y,"src/Images/Casa 1.png",this.anchocasa,this.altocasa);
this.casa2=new Obstaculo(app,this.casa1x,this.casa1y,"src/Images/Casa 1.png",this.anchocasa,this.altocasa);
this.roca=new Obstaculo(app,this.rocax,this.rocay,"src/Images/Roca.png",this.anchoroca,this.altoroca);
this.lobo=new Lobo(app,this.lobox,this.loboy,"src/Images/Lobo.png",this.ancholobo,this.altolobo);


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
          
        if(this.app.mouseX>=(this.lobo.x-114) && this.app.mouseX<=(this.lobo.x+114)  && this.app.mouseY>=(this.lobo.y-(233/2)) && this.app.mouseY<=(this.lobo.y+(233/2))){
            this.overlobo=true;
            
        }else{
            this.overlobo=false;}


      this.app.image(this.fondo,this.fondox,0)
      //this.fondox-=1
      
      
      
      this.app.image(this.cerdo1,this.cerdo1x,375)
      this.app.image(this.cerdo2,this.cerdo2x,200) 
      
      if(this.pintarcasa==true){
         
        this.casa1.dibujarObstaculo();

        
      }

      if (this.pintarcasa==false) {
          this.cerdo1x+=8;
          
      }
      
      if (this.pintarroca==true) {
        this.roca.moverObstaculo();
        this.roca.dibujarObstaculo();
        this.rocay++;

        if (this.aplastarroca==true) {
            this.roca.aplastarObjeto();
          
        }   

      }
      if (this.validarChoque(this.casa1) && this.pintarcasa==true) {
          this.restriccion1=false;
          
      }
      if (this.validarChoque(this.roca) && this.aplastarroca==false) {
        this.restriccion2=false;
    }



      this.app.imageMode(this.app.CENTER)
      this.lobo.dibujarLobo();
      this.app.imageMode(this.app.CORNER)
      
      
      this.app.image(this.casa2,this.casa2x,136)
      this.app.image(this.casa3,this.casa3x,56)
      this.app.image(this.gasolina,this.gasolinax,462)

      if (this.pintarflecha==true) {
          this.app.image(this.flecha,1365,640)
          
      }



      break;
      
      case 2:
          this.app.image(this.fondo2,0,0);

          if(this.app.mouseX>=(this.lobo.x-114) && this.app.mouseX<=(this.lobo.x+114)  && this.app.mouseY>=(this.lobo.y-(233/2)) && this.app.mouseY<=(this.lobo.y+(233/2))){
            this.overlobo=true;
            
        }else{
            this.overlobo=false;}

            if (this.validarChoque(this.casa1) && this.pintarcasa==true) {
                this.restriccion1=false;
                
            }
          
      



      break;

      case 3:
          this.app.image(this.fondo3,0,0);


      break;


      case 4:
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
        }
        //if (this.validarChoque(this.)) {
            
        
        this.posiconx=this.app.mouseX-(this.lobo.x+114);
          this.posiciony=this.app.mouseY-this.lobo.y;
            
          if(this.app.mouseX>=734 && this.app.mouseX<=1092  && this.app.mouseY>=184 && this.app.mouseY<=612 && this.pantalla==1){
            this.pintarcasa=false;
            this.pintarroca=true;
            //se le agrega la restriccion aqui
            this.restriccion1=true;
        }
            
            if(this.app.mouseX>=this.roca.x && this.app.mouseX<=(this.roca.x+this.roca.ancho) && this.app.mouseY>=this.roca.y && this.app.mouseY<=(this.roca.y+this.roca.alto) && this.pantalla==1){
                this.aplastarroca=true;
                this.restriccion2=true;
                this.pintarflecha=true;
                
            }

        if (this.app.mouseX>=1365 && this.app.mouseX<=1463 && this.app.mouseY>=640 && this.app.mouseY<=697 && this.pintarflecha==true) {
            this.pantalla=2
            
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
 if(this.seleccion)
 { 
     if (this.restriccion1==true && this.restriccion2==true ) {
        this.lobo.x=this.app.mouseX-this.posicionx;
        this.lobo.y=this.app.mouseY-this.posiciony;


         
     }
    }

   
     
     


 }




clicsuelto(){
this.seleccion=false;


}

validarChoque(e){
    if (this.lobo.x + (this.ancholobo/2) > e.x && this.lobo.x - (this.ancholobo/2)) {
      return true;
    }
    return false;
  }
}



