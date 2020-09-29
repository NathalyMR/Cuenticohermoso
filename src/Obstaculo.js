class Obstaculo{
    constructor(app,x,y,ruta,ancho,alto){
        
        this.app=app;
        this.x=x;
        this.y=y;
        this.ruta=ruta;
        
        this.ancho=ancho;
        this.alto=alto;
        this.estado=0;
        this.imagen=[];  

        for (let i = 0; i < 2; i++) {
            this.imagen.push(this.app.loadImage(this.ruta + i + ".png"));
            
        }
                     
        
      
        

    }

dibujarObstaculo(){
    this.app.image(this.imagen[this.estado],this.x,this.y,this.ancho,this.alto);

}
cambiarEstado(){
    if (this.app.mouseX>=(this.x) && this.app.mouseX<=(this.x+this.ancho)  && this.app.mouseY>=(this.y && this.app.mouseY<=(this.alto))) {
        this.estado=1;
    } else{

        this.estado=0;
    }
}
}


