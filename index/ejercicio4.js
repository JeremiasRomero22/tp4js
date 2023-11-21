class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      console.log(`Código: ${this.codigo}`);
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Precio: ${this.precio}`);
      console.log('---------------------');
    }
  }
  
  let productos = [
    new Producto(1, 'Producto 1', 20),
    new Producto(2, 'Producto 2', 15),
    new Producto(3, 'Producto 3', 10)
  ];
  
  productos.forEach(producto => {
    producto.imprimeDatos();
  });
  