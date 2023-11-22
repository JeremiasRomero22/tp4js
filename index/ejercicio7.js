class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  
    equals(otroContacto) {
      return this.nombre === otroContacto.nombre;
    }
  }
  
  class Agenda {
    constructor(tamano = 10) {
      this.contactos = [];
      this.tamanoMaximo = tamano;
    }
  
    aniadirContacto(contacto) {
      if (this.agendaLlena()) {
        console.log("La agenda está llena, no se puede añadir más contactos.");
        return;
      }
  
      if (this.existeContacto(contacto)) {
        console.log("El contacto ya existe en la agenda.");
      } else {
        this.contactos.push(contacto);
        console.log("Contacto añadido a la agenda.");
      }
    }
  
    existeContacto(contacto) {
      return this.contactos.some(c => c.equals(contacto));
    }
  
    listarContactos() {
      console.log("Lista de contactos:");
      this.contactos.forEach(contacto => {
        console.log(`Nombre: ${contacto.nombre} - Teléfono: ${contacto.telefono}`);
      });
    }
  
    buscarContacto(nombre) {
      const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
      if (contactoEncontrado) {
        console.log(`El teléfono de ${nombre} es: ${contactoEncontrado.telefono}`);
      } else {
        console.log("Contacto no encontrado en la agenda.");
      }
    }
  
    eliminarContacto(contacto) {
      const index = this.contactos.findIndex(c => c.equals(contacto));
      if (index !== -1) {
        this.contactos.splice(index, 1);
        console.log("Contacto eliminado de la agenda.");
      } else {
        console.log("El contacto no existe en la agenda.");
      }
    }
  
    agendaLlena() {
      return this.contactos.length >= this.tamanoMaximo;
    }
  
    huecosLibres() {
      const huecos = this.tamanoMaximo - this.contactos.length;
      console.log(`La agenda tiene ${huecos} huecos libres.`);
    }
  }
  
  function mostrarMenu() {
    const agenda = new Agenda();
    let opcion;
  
    do {
      opcion = prompt(`Selecciona una opción:
      1. Añadir contacto
      2. Verificar existencia de un contacto
      3. Listar contactos
      4. Buscar contacto por nombre
      5. Eliminar contacto
      6. Verificar si la agenda está llena
      7. Verificar huecos libres
      0. Salir`);
  
      switch (opcion) {
        case '1':
          const nombre = prompt("Ingrese el nombre del contacto:");
          const telefono = prompt("Ingrese el teléfono del contacto:");
          const nuevoContacto = new Contacto(nombre, telefono);
          agenda.aniadirContacto(nuevoContacto);
          break;
        case '2':
          const nombreExistencia = prompt("Ingrese el nombre del contacto a verificar:");
          const contactoExistente = new Contacto(nombreExistencia, '');
          console.log(agenda.existeContacto(contactoExistente) ? "El contacto existe en la agenda." : "El contacto no existe en la agenda.");
          break;
        case '3':
          agenda.listarContactos();
          break;
        case '4':
          const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
          agenda.buscarContacto(nombreBuscar);
          break;
        case '5':
          const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
          const contactoEliminar = new Contacto(nombreEliminar, '');
          agenda.eliminarContacto(contactoEliminar);
          break;
        case '6':
          console.log(agenda.agendaLlena() ? "La agenda está llena." : "La agenda no está llena.");
          break;
        case '7':
          agenda.huecosLibres();
          break;
        case '0':
          console.log("Saliendo del programa...");
          break;
        default:
          console.log("Opción inválida. Intente de nuevo.");
      }
    } while (opcion !== '0');
  }
  
  mostrarMenu();
  