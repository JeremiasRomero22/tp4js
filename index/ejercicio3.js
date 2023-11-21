class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    modificarAlto(nuevoAlto) {
      this.alto = nuevoAlto;
    }
  
    modificarAncho(nuevoAncho) {
      this.ancho = nuevoAncho;
    }
  
    mostrarPropiedades() {
      console.log(`Alto: ${this.alto}`);
      console.log(`Ancho: ${this.ancho}`);
    }
  
    calcularPerimetro() {
      return 2 * (this.ancho + this.alto);
    }
  
    calcularArea() {
      return this.ancho * this.alto;
    }
  }
  
  let miRectangulo = new Rectangulo(5, 10);
  
  miRectangulo.mostrarPropiedades();
  
  miRectangulo.modificarAlto(8);
  miRectangulo.modificarAncho(12);
  
  miRectangulo.mostrarPropiedades();
  
  console.log(`Perímetro: ${miRectangulo.calcularPerimetro()}`);
  console.log(`Área: ${miRectangulo.calcularArea()}`);
  