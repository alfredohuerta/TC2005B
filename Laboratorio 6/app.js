let prueba1 = document.getElementById('password1');
let password = "TC2005B";

let item1 = document.getElementById('');

function validar() {
    if(prueba1.value === password){
        alert("Contraseña válida")
        document.getElementById('tienda').style.visibility = 'visible';
    }else if (prueba1.value !== password){
        alert("Contraseña Inválida")
    }
}

