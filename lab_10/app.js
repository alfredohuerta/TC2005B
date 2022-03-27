let libros= ["Altazor", "Nostalgia de la Muerte", "Poesía en movimiento"];

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
    }else if(request.url === '/libros' && request.method == 'GET'){
        response.setHeader('Content-Type', 'text/html');
+       response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Laboratorio 10</title><meta charset="utf-8"></meta><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body class="mx-auto" style="width: 80%;">');
        response.write('<p class="text-center"><b>Laboratorio 10 | Erick Alfredo García Huerta</b></p>');
        response.write('<hr>');

        for(let i in libros){
            response.write('<div classs="container">');
                response.write('<div class="row align-items-start">');
                    response.write('<div class="card" style="width: 18rem;">');
                        response.write('<img src="..." class="card-img-top" alt="...">');
                        response.write('<div class="card-body">');
                        response.write('<p class="card-text">' + libros[i] + '</p>');
                        response.write('</div>');
                    response.write('</div>');
                response.write('</div>');
            response.write('</div>');
        }

        response.write('<br>');
        response.write('<form action="/nuevo" method="POST">');
+       response.write('<label for="nombre">Nombre del nuevo libro: </label>');
+       response.write('<input type="text" name="nombre" required>');
+       response.write('<input type="submit" value="Enviar">');
+       response.write('</form>');

        response.write('<footer>');
        response.write('<br>');
        response.write('<div class="mx-auto" style="width: 20%;">');
        response.write('<p class="text-center">Erick Alfredo García Huerta | <a href="https://github.com/alfredohuerta/TC2005B-Lab" target="_blank">Github</a> </p>');
        response.write('</div>');
        response.write('</footer>');

        response.write('</body>');
        response.write('</html>');
        response.end();
    }else if (request.url === '/nuevo' && request.method === 'POST') {
        const datos = [];
        request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
+           const datos_completos = Buffer.concat(datos).toString();
+           console.log(datos_completos);
+           const nuevo_dato = datos_completos.split('=')[1];
+           console.log(nuevo_dato);
+           caballos.push(nuevo_dato);
+           console.log(caballos);
+           response.setHeader('Content-Type', 'text/html');
+           response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head>');
+           response.write('<body>');
+           response.write('<h1>Bienvenido a este sitio de caballos</h1>');
+           response.write('<main>');
+           response.write('<h2>Aquí se habla se de caballos</h2>');
+           response.write('<h3>' + nuevo_dato + ' fue agregado a la lista.</h3>');
+           response.write('<p>Estos son nuestros caballos:</p>');
+           response.write('<ol>');
+           for (let i in caballos) {
+               response.write('<li>' + caballos[i] + '</li>');
+           }
+           response.write('</ol>');
+           response.write('<a href="nuevo">Agregar un nuevo caballo</a>');
+           response.write('</main>');
+           response.write('</body>');
+           return response.end();
        })
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
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
+       response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Laboratorio 10 | Page not found</title><meta charset="utf-8"></meta><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
+       response.write('<body class="mx-auto" style="width: 80%;">');
        response.write('<br>');
+       response.write('<h1 class="text-center">La página '+ request.url +' no se encontró</h1>');
        response.write('<footer>');
        response.write('<br>');
        response.write('<div class="mx-auto" style="width: 20%;">');
        response.write('<p>Erick Alfredo García Huerta | <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Github</a> </p>');
        response.write('</div>');
        response.write('</footer>');
+       response.write('</body>');
        response.end();
    }
});

server.listen(3000);