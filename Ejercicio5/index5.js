function convertirArrayAObjetos(arrayLibros, tituloBuscado) {
  // Array para almacenar los objetos convertidos
  let librosObjetos = [];

  // Recorremos el array de libros
  arrayLibros.forEach((titulo, index) => {
      // Creamos el objeto con id autoincremental y title normalizado
      let libroObjeto = {
          id: index + 1,
          title: titulo.charAt(0).toUpperCase() + titulo.slice(1).toLowerCase()
      };

      // Agregamos el objeto al array de objetos
      librosObjetos.push(libroObjeto);
  });

  // Convertimos el título buscado para comparar en minúsculas
  let tituloBuscadoLower = tituloBuscado.toLowerCase();

  // Buscamos el id correspondiente al título buscado
  let idBuscado = null;
  librosObjetos.forEach(libro => {
      if (libro.title.toLowerCase() === tituloBuscadoLower) {
          idBuscado = libro.id;
      }
  });

  // Devolvemos el id correspondiente al título buscado (null si no se encontró)
  return idBuscado;
}

// Ejemplo de uso con el array proporcionado
let libros = ["JavaScript: The Good Parts",
  "Clean Code: A Handbook of Agile Software Craftsmanship",
  "Code Complete: A Practical Handbook of Software Construction",
  "Design Patterns: Elements of Reusable Object-Oriented Software",
  "The Pragmatic Programmer: Your Journey to Mastery",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "You Don't Know JS",
  "Python Crash Course",
  "Learning Python",
  "Java: The Complete Reference",
  "Head First Java",
  "C# in Depth",
  "The Go Programming Language",
  "Programming in Scala",
  "Effective Java",
  "Ruby on Rails Tutorial: Learn Web Development with Rails",
  "Node.js Design Patterns",
  "Angular Up and Running",
  "React: Up and Running",
  "Vue.js: Up and Running",
  "Django for Beginners",
  "Flask Web Development",
  "Full Stack Development with Spring Boot and React",
  "Machine Learning Yearning",
  "Data Science for Business",
  "Artificial Intelligence: A Modern Approach",
  "Introduction to Algorithms",
  "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
  "Domain-Driven Design: Tackling Complexity in the Heart of Software",
  "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
  "Refactoring: Improving the Design of Existing Code",
  "The Mythical Man-Month: Essays on Software Engineering",
  "DevOps Handbook",
  "Git Pro",
  "The Docker Book: Containerization is the New Virtualization",
  "Site Reliability Engineering: How Google Runs Production Systems",
  "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
  "Accelerate: The Science of Lean Software and DevOps",
  "Code: The Hidden Language of Computer Hardware and Software",
  "The C Programming Language",
  "Effective Python: 90 Specific Ways to Write Better Python",
  "Programming Rust",
  "Rust in Action",
  "Go in Practice",
  "Pro Git",
  "Java Concurrency in Practice",
  "The Rust Programming Language"];
let titlesearch = "Java: The Complete Reference";  
let idEn = convertirArrayAObjetos(libros, titlesearch);

alert(`El id del libro "${titlesearch}" es: ${idEn}`);