const { write } = require('fs');
const http = require('http');

const server = http.createServer((request, response) =>{
    if (request.url === '/'){
        response.setHeader('Content-Type', 'text/html');
+       response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Laboratorio 10</title><meta charset="utf-8"></meta><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body class="mx-auto" style="width: 80%;">');
        response.write('<p class="text-center"><b>Laboratorio 10 | Erick Alfredo García Huerta</b></p>');
        response.write('<hr>');

        response.write('<h4>Las rutas son: </h4>');
        response.write('<ul class="list-group">');
        response.write('<li class="list-group-item"> / </li>');
        response.write('<li class="list-group-item">/nocturno</li>');
        response.write('<li class="list-group-item">/libros</li>');
        response.write('<li class="list-group-item">/route</li>');
        response.write('</ul>');

        response.write('<footer>');
        response.write('<br>');
        response.write('<div class="mx-auto" style="width: 20%;">');
        response.write('<p class="text-center">Erick Alfredo García Huerta | <a href="https://github.com/alfredohuerta/TC2005B-Lab" target="_blank">Github</a> </p>');
        response.write('</div>');
        response.write('</footer>');
        response.write('</body>');
        response.write('</html>');
    -   response.end();
    }else if(request.url === '/nocturno'){
    -   response.setHeader('Content-Type', 'text/html');
+       response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Laboratorio 10</title><meta charset="utf-8"></meta><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body class="mx-auto" style="width: 80%;">');
        response.write('<p class="text-center"><b>Laboratorio 10 | Erick Alfredo García Huerta</b></p>');
        response.write('<hr>');

        response.write('<h3 class="text-center">Nocturno en que nada se oye</h3>');
        response.write('<br>');
        response.write('<p class="text-center">En medio de un silencio desierto como la calle antes del crimen');
        response.write('<p class="text-center">sin respirar siquiera para que nada turbe mi muerte</p>');
        response.write('<p class="text-center">en esta soledad sin paredes</p>');
        response.write('<p class="text-center">al tiempo que huyeron los ángulos</p>');
        response.write('<p class="text-center">en la tumba del lecho dejo mi estatua sin sangre</p>');
        response.write('<p class="text-center">para salir en un momento tan lento</p>');
        response.write('<p class="text-center">en un interminable descenso</p>');
        response.write('<p class="text-center">sin brazos que tender</p>');
        response.write('<p class="text-center">sin dedos para alcanzar la escala que cae de un piano invisible</p>');
        response.write('<p class="text-center">sin más que una mirada y una voz</p>');
        response.write('<p class="text-center">que no recuerdan haber salido de ojos y labios</p>');
        response.write('<p class="text-center">¿qué son labios? ¿qué son miradas que son labios?</p>');
        response.write('<p class="text-center">Y mi voz ya no es mía</p>');
        response.write('<p class="text-center">dentro del agua que no moja</p>');
        response.write('<p class="text-center">dentro del aire de vidrio</p>');
        response.write('<p class="text-center">dentro del fuego lívido que corta como el grito</p>');
        response.write('<p class="text-center">Y en el juego angustioso de un espejo frente a otro</p>');
        response.write('<p class="text-center">cae mi voz</p>');
        response.write('<p class="text-center">y mi voz que madura</p>');
        response.write('<p class="text-center">y mi voz quemadura</p>');
        response.write('<p class="text-center">y mi bosque madura</p>');
        response.write('<p class="text-center">y mi voz quema dura</p>');
        response.write('<p class="text-center">como el hielo de vidrio</p>');
        response.write('<p class="text-center">como el grito de hielo</p>');
        response.write('<p class="text-center">aquí en el caracol de la oreja</p>');
        response.write('<p class="text-center">el latido de un mar en el que no sé nada</p>');
        response.write('<p class="text-center">en el que no se nada</p>');
        response.write('<p class="text-center">porque he dejado pies y brazos en la orilla</p>');
        response.write('<p class="text-center">siento caer fuera de mí la red de mis nervios</p>');
        response.write('<p class="text-center">mas huye todo como el pez que se da cuenta</p>');
        response.write('<p class="text-center">hasta ciento en el pulso de mis sienes</p>');
        response.write('<p class="text-center">muda telegrafía a la que nadie responde</p>');
        response.write('<p class="text-center">porque el sueño y la muerte nada tienen ya que decirse.</p>');
        response.write('<p class="text-end"> Por: Xavier Villaurrutia</p>');

        response.write('<footer>');
        response.write('<div class="mx-auto" style="width: 20%;">');
        response.write('<p>Erick Alfredo García Huerta | <a href="https://github.com/alfredohuerta/TC2005B-Lab" target="_blank">Github</a> </p>');
        response.write('</div>');
        response.write('</footer>');
        response.write('</body>');
        response.write('</html>');
    -   response.end();
    }else if(request.url === '/libros'){
        response.setHeader('Content-Type', 'text/html');
+       response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Laboratorio 10</title><meta charset="utf-8"></meta><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body class="mx-auto" style="width: 80%;">');
        response.write('<p class="text-center"><b>Laboratorio 10 | Erick Alfredo García Huerta</b></p>');
        response.write('<hr>');

        response.write('<div class="container">');
        response.write('<div class="row align-items-start">');
        response.write('<div class="col">');
        response.write('<div class="card" style="width: 18rem;">');
        response.write('<img src="./imgs/Altazor.jfif" class="card-img-top" alt="Altazor">');
        response.write('<div class="card-body">');
        response.write('<h5 class="card-title">Altazor</h5>');
        response.write('<p class="card-text">Autor: Vicente Huidobro</p>');
        response.write('</div>');
        response.write('</div>');
        response.write('</div>');
        response.write('<div class="col">');  
        response.write('<div class="card" style="width: 18rem;">');
        response.write('<img src="./imgs/Movimiento.jpg" class="card-img-top" alt="Poesía en movimiento">');
        response.write('<div class="card-body">');
        response.write('<h5 class="card-title">Poesía en movimiento</h5>');
        response.write('<p class="card-text">Antología por Octavio Paz</p>');
        response.write('</div>');
        response.write('</div>');
        response.write('</div>');
        response.write('<div class="col">');
        response.write('<div class="card" style="width: 18rem;">');
        response.write('<img src="./imgs/Nostalgia" class="card-img-top" alt="Nostalgia de la muerte">');
        response.write('<div class="card-body">');
        response.write('<h5 class="card-title">Nostalgia de la muerte</h5>');
        response.write('<p class="card-text">Autor: Xavier Villaurrutia</p>');
        response.write('</div>');
        response.write('</div>');
        response.write('</div>');
        response.write('</div>');

        response.write('<footer>');
        response.write('<br>');
        response.write('<div class="mx-auto" style="width: 20%;">');
        response.write('<p class="text-center">Erick Alfredo García Huerta | <a href="https://github.com/alfredohuerta/TC2005B-Lab" target="_blank">Github</a> </p>');
        response.write('</div>');
        response.write('</footer>');

        response.write('</body>');
        response.write('</html>');
        response.end();
    }else if(request.url === '/route'){
        response.setHeader('Content-Type', 'text/html');
+       response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Laboratorio 10</title><meta charset="utf-8"></meta><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body class="mx-auto" style="width: 80%;">');
        response.write('<p class="text-center"><b>Laboratorio 10 | Erick Alfredo García Huerta</b></p>');
        response.write('<hr>');

        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⠿⠟⠛⠻⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣆⣀⣀⠀⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠻⣿⣿⣿⠅⠛⠋⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢼⣿⣿⣿⣃⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣟⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣛⣛⣫⡄⠀⢸⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⡆⠸⣿⣿⣿⡷⠂⠨⣿⣿⣿⣿⣶⣦⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣾⣿⣿⣿⣿⡇⢀⣿⡿⠋⠁⢀⡶⠪⣉⢸⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⡏⢸⣿⣷⣿⣿⣷⣦⡙⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿⣿⣿⣿⣿⣷⣦⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<p class="text-center">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣵⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>');
        response.write('<br>');
        response.write('<p class="text-center"><a  href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Full image</a></p>');

        response.write('<footer>');
        response.write('<br>');
        response.write('<div class="mx-auto" style="width: 20%;">');
        response.write('<p>Erick Alfredo García Huerta | <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Github</a> </p>');
        response.write('</div>');
        response.write('</footer>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    }else{

    }
});

server.listen(3000);