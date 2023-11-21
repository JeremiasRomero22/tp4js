class Cuenta {
    constructor(titular) {
      this.titular = titular;
      this.saldo = 0;
    }
  
  
    ingresar(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log(`Se han ingresado ${cantidad} a la cuenta`);
      } else {
        console.log("La cantidad a ingresar debe ser mayor que 0");
      }
    }
  
   
    extraer(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Se han extraído ${cantidad} de la cuenta`);
      } else {
        console.log("Cantidad no válida o saldo insuficiente");
      }
    }
  
   
    informar() {
      console.log(`Titular: ${this.titular}`);
      console.log(`Saldo actual: ${this.saldo}`);
    }
  }
  
 
  let cuenta = new Cuenta("Alex");
  
  cuenta.informar();
  cuenta.ingresar(1000);
  cuenta.informar();
  cuenta.extraer(500);
  cuenta.informar();
  