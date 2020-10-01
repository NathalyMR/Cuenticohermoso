class Lobo{
    constructor(app,x,y,ruta,ancho,alto){
        this.app=app;
        this.x=x;
        this.y=y;
        this.ruta=ruta;
        this.imagen=[];  
        this.ancho=ancho;
        this.alto=alto;
        this.estado=0;

        for (let i = 0; i < 2; i++) {
            this.imagen.push(this.app.loadImage(this.ruta + i + ".png"));
            
        }

    }
dibujarLobo(){
    this.app.image(this.imagen[this.estado],this.x,this.y,this.ancho,this.alto);
}
cambiarEstado(){
    

    if (this.app.mouseX>=(this.x-114) && this.app.mouseX<=(this.x+114)  && this.app.mouseY>=(this.y-(233/2)) && this.app.mouseY<=(this.y+(233/2))) {
        this.estado=1;
    } else{

        this.estado=0;
    }


}

}