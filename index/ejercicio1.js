
let auto = {
    color: "blanco",
    marca: "Toyota",
    modelo: "hilux",
    encendido: false,
  
    encender: function() {
      if (!this.encendido) {
        this.encendido = true;
        console.log("Auto encendido");
      } else {
        console.log("El auto ya está encendido");
      }
    },
  
    apagar: function() {
      if (this.encendido) {
        this.encendido = false;
        console.log("El auto se apagó");
      } else {
        console.log("El auto ya está apagado");
      }
    }
  };
  
  auto.encender();
  auto.apagar();
  