let contenidoDinamico = document.getElementById("contenidoDinamico");

function cargarContenido(){

for(let i = 0; i < 20; i++){

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then( function(data){

        let imagen = data.results[0].picture.large;
        let nombre = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
        let edad = data.results[0].dob.age;
        let email = data.results[0].email;
        let celular = data.results[0].cell;

        let nuevoDiv =document.createElement('div');

        let divRecargado = `
        <div class="container-fluid">
        <div class="card">
        <img src=${imagen} id="img${i}">
        <h4 id="titulo1">${nombre}</h4>
        <h4 id="ed1">Edad ${edad}</h4>
        <h5>${email}</h2>
        <h5>Celular ${celular}</h2>
        </div>
        </div>
        
        `;
        nuevoDiv.innerHTML = divRecargado;
        contenidoDinamico.appendChild(nuevoDiv);







        return data;
    } )
    .catch((err) => console.log(err));
}    
}
