class Roca extends Obstaculo{
    constructor(app,x,y,ruta,ancho,alto){
        super(app,x,y,ruta,ancho,alto)
    }
moverRoca(){
    if (this.y<=252) {
        this.y+=12;
        
    }
}
aplastarRoca(){
    this.alto=138;
    this.y=473;

}




}