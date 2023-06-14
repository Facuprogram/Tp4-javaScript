/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/

/*class Auto{
    constructor(color, marca, modelo, encendido = false) {
        this.color;
        this.marca;
        this.modelo;
        this.encendido = encendido;
        this.apagado = apagado;
    }

    encender() {
        this.encendido = true;
        console.log('el auto esta encendido');
    }
    apagado(){
        this.apagado = true;
        console.log('el auto esta apagado');
    }
}*/

/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/

/*  let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad) {
      this.saldo += cantidad;
    },
    extraer: function(cantidad) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
      } else {
        console.log("No hay suficiente saldo en la cuenta.");
      }
    },
    informar: function() {
      console.log("Titular: " + this.titular);
      console.log("Saldo: " + this.saldo);
    }
  };  */

  /* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.  */

  /* class Rectangulo {
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
      console.log("Alto: " + this.alto);
      console.log("Ancho: " + this.ancho);
    }
  
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }   */

 /* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/


  /*class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      console.log("Código: " + this.codigo);
      console.log("Nombre: " + this.nombre);
      console.log("Precio: " + this.precio);
    }
  }
  
  // Crear instancias de Producto y guardarlas en un array
  let productos = [];
  
  let producto1 = new Producto(1, "Producto 1", 100);
  let producto2 = new Producto(2, "Producto 2", 200);
  let producto3 = new Producto(3, "Producto 3", 300);
  
  productos.push(producto1, producto2, producto3);
  
  // Mostrar los valores de los objetos instanciados
  for (let i = 0; i < productos.length; i++) {
    console.log("Datos del producto " + (i + 1) + ":");
    productos[i].imprimeDatos();
    console.log("---------");
  }  */

  /*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras. */

/*  class Persona {
    constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.añoNacimiento = añoNacimiento;
      this.DNI = this.generaDNI();
    }
  
    mostrarGeneracion() {
      let generacion = "";
      let rasgoCaracteristico = "";
  
      if (this.añoNacimiento >= 1946 && this.añoNacimiento <= 1964) {
        generacion = "Baby Boomer";
        rasgoCaracteristico = "Postguerra y reconstrucción.";
     
    } else if (this.añoNacimiento >= 1965 && this.añoNacimiento <= 1980) {
        generacion = "Generación X";
        rasgoCaracteristico = "Auge tecnológico y cambio cultural.";
    
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1996) {
        generacion = "Generación Y (Millennials)";
        rasgoCaracteristico = "Digitalización y redes sociales.";
    
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
        generacion = "Generación Z";
        rasgoCaracteristico = "expansion masiva de internet.";
     
      }
  
      console.log("Generación: " + generacion);
      console.log("Rasgo característico: " + rasgoCaracteristico);
    }
  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        console.log(this.nombre + " es mayor de edad.");
      } else {
        console.log(this.nombre + " no es mayor de edad.");
      }
    }
  
    mostrarDatos() {
      console.log("Nombre: " + this.nombre);
      console.log("Edad: " + this.edad);
      console.log("Sexo: " + this.sexo);
      console.log("Peso: " + this.peso);
      console.log("Altura: " + this.altura);
      console.log("Año de nacimiento: " + this.añoNacimiento);
      console.log("DNI: " + this.DNI);
    }
  
    generaDNI() {
      let dni = "";
      for (let i = 0; i < 8; i++) {
        dni += Math.floor(Math.random() * 10);
      }
      return dni;
    }
  }
  
  // Crear una instancia de Persona
  var persona1 = new Persona("Juan", 25, "H", 70, 180, 1996);
  
  // Mostrar generación y rasgo característico
  persona1.mostrarGeneracion();
  
  // Verificar si es mayor de edad
  persona1.esMayorDeEdad();
  
  // Mostrar datos de la persona
  persona1.mostrarDatos();  */

 /* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

  /*class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    // Métodos get y set para cada propiedad

    get ISBN() {
      return this._ISBN;
    }
  
    set ISBN(nuevoISBN) {
      this._ISBN = nuevoISBN;
    }
  
    get titulo() {
      return this._titulo;
    }
  
    set titulo(nuevoTitulo) {
      this._titulo = nuevoTitulo;
    }
  
    get autor() {
      return this._autor;
    }
  
    set autor(nuevoAutor) {
      this._autor = nuevoAutor;
    }
  
    get numPaginas() {
      return this._numPaginas;
    }
  
    set numPaginas(nuevoNumPaginas) {
      this._numPaginas = nuevoNumPaginas;
    }
  
    mostrarLibro() {
      console.log(
        "El libro " +
          this.titulo +
          " con ISBN " +
          this.ISBN +
          " creado por el autor " +
          this.autor +
          " tiene " +
          this.numPaginas +
          " páginas."
      );
    }
  }
  
  // Crear objetos Libro
  var libro1 = new Libro("978", "nombre libro 1", "corex2.0", 662);
  var libro2 = new Libro("1548", "nombre libro 2", "facuprogram", 448);
  
  // Mostrar información de los libros
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  // Comparar número de páginas entre los dos libros
  if (libro1.numPaginas > libro2.numPaginas) {
    console.log("El libro " + libro1.titulo + " tiene más páginas que el libro " + libro2.titulo);
  } else if (libro1.numPaginas < libro2.numPaginas) {
    console.log("El libro " + libro2.titulo + " tiene más páginas que el libro " + libro1.titulo);
  } else {
    console.log("Ambos libros tienen el mismo número de páginas.");
  }  */


 /* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.  */


  /*class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  
    equals(otroContacto) {
      return this.nombre.toLowerCase() === otroContacto.nombre.toLowerCase();
    }
  }
  
  class Agenda {
    constructor(tamano = 10) {
      this.contactos = [];
      this.tamano = tamano;
    }
  
    aniadirContacto(contacto) {
      if (this.agendaLlena()) {
        console.log("La agenda está llena. No se puede añadir más contactos.");
        return;
      }
  
      if (this.existeContacto(contacto)) {
        console.log("El contacto ya existe en la agenda.");
        return;
      }
  
      this.contactos.push(contacto);
      console.log("Contacto añadido correctamente.");
    }
  
    existeContacto(contacto) {
      return this.contactos.some((c) => c.equals(contacto));
    }
  
    listarContactos() {
      console.log("Lista de contactos en la agenda:");
      this.contactos.forEach((contacto) => {
        console.log("Nombre: " + contacto.nombre + ", Teléfono: " + contacto.telefono);
      });
    }
  
    buscarContacto(nombre) {
      const contactosEncontrados = this.contactos.filter((contacto) =>
        contacto.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
  
      if (contactosEncontrados.length === 0) {
        console.log("No se encontró ningún contacto con ese nombre.");
      } else {
        console.log("Contactos encontrados:");
        contactosEncontrados.forEach((contacto) => {
          console.log("Nombre: " + contacto.nombre + ", Teléfono: " + contacto.telefono);
        });
      }
    }
  
    eliminarContacto(contacto) {
      const index = this.contactos.findIndex((c) => c.equals(contacto));
  
      if (index === -1) {
        console.log("El contacto no existe en la agenda.");
      } else {
        this.contactos.splice(index, 1);
        console.log("Contacto eliminado correctamente.");
      }
    }
  
    agendaLlena() {
      return this.contactos.length >= this.tamano;
    }
  
    huecosLibres() {
      return this.tamano - this.contactos.length;
    }
  }
  
  // Crear una instancia de Agenda con tamaño por defecto
  var agenda = new Agenda();
  
  // Menú de opciones
  while (true) {
    var opcion = prompt(
      "Selecciona una opción:\n1. Añadir contacto\n2. Buscar contacto\n3. Eliminar contacto\n4. Listar contactos\n5. Salir"
    );
  
    switch (opcion) {
      case "1":
        var nombre = prompt("Ingrese el nombre del contacto:");
        var telefono = prompt("Ingrese el teléfono del contacto:");
        var nuevoContacto = new Contacto(nombre, telefono);
        agenda.añadirContacto(nuevoContacto);
        break;
  
      case "2":
        var nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;
  
      case "3":
        var nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
        var contactoEliminar = new Contacto(nombreEliminar, "");
        agenda.eliminarContacto(contactoEliminar);
        break;
  
      case "4":
        agenda.listarContactos();
        break;
  
      case "5":
        console.log("nos vemos rey");
        return;

    }







}  */

/*9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */

 /*class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      console.log("El animal emite un sonido.");
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonido() {
      console.log("El perro ladra: ¡Guau, guau!");
    }
  }
  
  class Gato extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonido() {
      console.log("El gato maulla: ¡Miau, miau!");
    }
  }
  
  // Crear objetos
  var perro = new Perro("Firulais", 5);
  var gato = new Gato("Misifu", 3);
  
  // Llamar al método emitirSonido de cada objeto
  perro.emitirSonido(); // El perro ladra: ¡Guau, guau!
  gato.emitirSonido(); // El gato maulla: ¡Miau, miau! */








    