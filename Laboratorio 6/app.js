let prueba1 = document.getElementById('password1');
let password = "TC2005B";

function validar() {
    if(prueba1.value === password){
        alert("Contraseña válida")
    }else if (prueba1.value !== password){
        alert("Contraseña Inválida")
    }
}