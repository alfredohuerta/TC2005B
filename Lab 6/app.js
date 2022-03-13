//Validación de contraseñas
let prueba1 = document.getElementById('password1');
let password = "TC2005B";

function validar() {
    if(prueba1.value === password){
        alert("Contraseña válida")
        document.getElementById('tienda').style.visibility = 'visible';
    }else if (prueba1.value !== password){
        alert("Contraseña Inválida")
    }
}

//Tienda 
//productos de la tienda
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let item6 = document.getElementById('item6');

//elementos de la tabla
let numProducto = document.getElementById('numero-productos');
let cantProductos = document.getElementById('cantidad-productos');
let nombreProducto = document.getElementById('nombre-productos');
let precio = document.getElementById('precio');

function agregarCarrito(){
    if (item1) {
        console.log("Funciona item 1")        
    } else if (item2){
        console.log("Funciona item 2")
    } else if (item3){
        console.log("Funciona item 3")
    } else if (item4){
        console.log("Funciona item 4")
    } else if (item5){
        console.log("Funciona item 5")
    } else if (item6){
        console.log("Funciona item 6")
    }else{
        console.log("Error")
    }
}

function erase(){
    //code
}