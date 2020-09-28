class Obstaculo{
    constructor(app,x,y,ruta){
        
        this.app=app;
        this.x=x;
        this.y=y;
        this.ruta=ruta;
        this.imagen=this.app.loadImage(this.ruta);
        

    }

dibujarObstaculo(){
    this.app.image(this.imagen,this.x,this.y);




}





}