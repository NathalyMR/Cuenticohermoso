class Casa extends Obstaculo {
constructor(app,x,y,ruta,ancho,alto){
    super(app,x,y,ruta,ancho,alto)

}
moverCasa(){
    
        this.y-=12;
        
    
}
}