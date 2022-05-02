let libros = [
    {nombre: "Nostalgia de la muerte"}, 
    {nombre: "Altazor"}, 
    {nombre: "Poesía en movimiento"}, 
    {nombre: "Algo sobre la muerte del Mayor Sabines"}
];

module.exports = class Libros{
    //Crear nuevo libro
    constructor(nuevo_libro){
        this.nombre = nuevo_libro;
    }

    //Almacenar en el arreglo de libros el nuevo libro y proyectar los cambios.
    save() {
        libros.push(this);
        console.log(libros);
    }

    //Regresa todos los libros
    static fetchAll(){
        return libros;
    }
}