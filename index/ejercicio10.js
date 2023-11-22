class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        console.log(`${pasajero} abordó el avión ${this.nombre} con destino a ${this.destino}!`);
      } else {
        console.log(`Lo siento, el avión ${this.nombre} con destino a ${this.destino} está lleno.`);
      }
    }
  }
  
  class Aeropuerto {
    constructor(nombre) {
      this.nombreAeropuerto = nombre;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
    }
  
    buscarAvion(nombreAvion) {
      const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
      return avionEncontrado ? avionEncontrado : "Avión no encontrado.";
    }
  }
  
  const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
  
  const avion1 = new Avion("Vuelo1", 150, "Londres");
  const avion2 = new Avion("Vuelo2", 200, "París");
  const avion3 = new Avion("Vuelo3", 100, "Nueva York");
  
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);
  
  
  const avionBuscado = aeropuertoInternacional.buscarAvion("Vuelo2");
  
  if (avionBuscado !== "Avión no encontrado.") {

    avionBuscado.abordar("Pasajero1");
  }
  