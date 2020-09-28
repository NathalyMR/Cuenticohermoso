class Lobo{
    constructor(app,x,y,ruta,ancho,alto){
        this.app=app;
        this.x=x;
        this.y=y;
        this.ruta=ruta;
        this.imagen=this.app.loadImage(this.ruta);
        this.ancho=ancho;
        this.alto=alto;

    }
dibujarLobo(){
    this.app.image(this.imagen,this.x,this.y,this.ancho,this.alto);
}


}