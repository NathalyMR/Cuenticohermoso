class Obstaculo{
    constructor(app,x,y,ruta,ancho,alto){
        
        this.app=app;
        this.x=x;
        this.y=y;
        this.ruta=ruta;
        this.imagen=this.app.loadImage(this.ruta);
        this.ancho=ancho;
        this.alto=alto;
        

    }

dibujarObstaculo(){
    this.app.image(this.imagen,this.x,this.y,this.ancho,this.alto);




}

moverObstaculo(){
    
    if (this.y<=252) {
        this.y+=12;
        
    }
}
aplastarObjeto(){
    this.alto=138;

}



}