const usuarios = [];

module.exports = class User {
    
    constructor(nuevoUsuario, nuevaContraseña, nuevoNombre){
        this.usuario = nuevoUsuario;
        this.contraseña = nuevaContraseña;
        this.nombre = nuevoNombre;
    }

    save() {
        usuarios.push(this);
        console.log(usuarios);
    }

    static login(usuario, contraseña) {
        return true;
    }
}