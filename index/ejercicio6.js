class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
  
    mostrarLibro() {
      console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`);
    }
  }
  
  const libro1 = new Libro("978-0061120084", "El Alquimista", "Paulo Coelho", 208);
  const libro2 = new Libro("978-1400079179", "Cien años de soledad", "Gabriel García Márquez", 432);
  

  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  if (libro1.numPaginas > libro2.numPaginas) {
    console.log(`El libro "${libro1.titulo}" tiene más páginas.`);
  } else if (libro1.numPaginas < libro2.numPaginas) {
    console.log(`El libro "${libro2.titulo}" tiene más páginas.`);
  } else {
    console.log("Ambos libros tienen la misma cantidad de páginas.");
  }
  