
// para hacer un fetch de varios resultados a la vez https://randomuser.me/api/?results=5000
//let imagen1, imagen2, imagen3;
//let nombre1, nombre2, nombre3;
//let edad1, edad2, edad3;
let contenidoDinamico1 = document.getElementById("contenidoDinamico1");
let contenidoDinamico2 = document.getElementById("contenidoDinamico2");
let contenidoDinamico3 = document.getElementById("contenidoDinamico3");

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then( function(data){

       let imagen1 = data.results[0].picture.large;
       let nombre1 = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
       let edad1 = data.results[0].dob.age;

        let nuevoDiv1 = document.createElement('div');

        let divRecargado1 = `
        <div class="card">
        <img src=${imagen1} id="img1">
        <h4 id="titulo1">${nombre1}</h4>
        <p id="ed1">${edad1}</p>
        <a onclick="mostrarModal1(imagen1, nombre1, edad1)"  href="#modal" id="show-modal" > Leer más info </a>
        </div>

        `;
        nuevoDiv1.innerHTML = divRecargado1;
        contenidoDinamico1.appendChild(nuevoDiv1);

        
    

        return data;
    } )
    .catch((err) => console.log(err));

    
fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then( function(data){

        let imagen2 = data.results[0].picture.large;
        let nombre2 = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
        let edad2 = data.results[0].dob.age;

        let nuevoDiv2 = document.createElement('div');

        let divRecargado2 = `
        <div class="card">
        <img src=${imagen2} id="img1">
        <h4 id="titulo1">${nombre2}</h4>
        <p id="ed1">${edad2}</p>
        <a onclick="mostrarModal1(imagen2, nombre2, edad2)" href="#modal" id="show-modal"> Leer más info </a>
        </div>

        `;
        nuevoDiv2.innerHTML = divRecargado2;
        contenidoDinamico2.appendChild(nuevoDiv2);


        return data;
    } )
    .catch((err) => console.log(err));


 fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then( function(data){

        let imagen3 = data.results[0].picture.large;
        let nombre3 = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
        let edad3 = data.results[0].dob.age;

        let nuevoDiv3 = document.createElement('div');

        let divRecargado3 = `
        <div class="card">
        <img src=${imagen3} id="img1">
        <h4 id="titulo1">${nombre3}</h4>
        <p id="ed1">${edad3}</p>
        <a onclick="mostrarModal1(imagen3, nombre3, edad3)" href="#modal" id="show-modal"> Leer más info </a>
        </div>

        `;
        nuevoDiv3.innerHTML = divRecargado3;
        contenidoDinamico3.appendChild(nuevoDiv3);


        return data;
    } )
    .catch((err) => console.log(err));


//como no se recarga la página la función mostrar modal siempre va a quedar sólo con 1 personaje
function mostrarModal1(imagen1, nombre1, edad1){
    console.log('primer modal');
    console.log(imagen1, nombre1, edad1);

    let nuevoModal1 = document.createElement('div')
    let modalContent1 = `
        
    <aside id="modal" class="modal">
    <div class="content-modal">
        <header>
            <a href="#" class="close-modal" onclick="ponerImagenesUndefined()">X</a>
            <h2>${nombre1}</h2>
        </header>
        <article>

        <div class="card">
        <img src=${imagen1} id="img1">
        <h4 id="titulo1">${nombre1}</h4>
        <p id="ed1">${edad1}</p>
        </div>
            
        </article>
        </div>
        <a href="#" class="btn-close-modal"></a>
    </aside>

    `;
    nuevoModal1.innerHTML = modalContent1;
    document.body.appendChild(nuevoModal1);
    
    // function ponerImagenesUndefined(){
    //     imagen1, nombre1, edad1 = undefined;
    // }

}    

// function mostrarModal2(imagen2, nombre2, edad2){
//     console.log('segunda modal');
//     console.log(imagen2, nombre2, edad2);

//     let nuevoModal2 = document.createElement('div')
//     let modalContent2 = `
        
//     <aside id="modal" class="modal">
//     <div class="content-modal">
//         <header>
//             <a href="#" class="close-modal">X</a>
//             <h2>${nombre2}</h2>
//         </header>
//         <article>

//         <div class="card">
//         <img src=${imagen2} id="img1">
//         <h4 id="titulo1">${nombre2}</h4>
//         <p id="ed1">${edad2}</p>
//         </div>
            
//         </article>
//         </div>
//         <a href="#" class="btn-close-modal"></a>
//     </aside>

//     `;
//     nuevoModal2.innerHTML = modalContent2;
//     document.body.appendChild(nuevoModal2);

// }    

// function mostrarModal3(imagen3, nombre3, edad3){
//     console.log('tercer modal');
//     console.log(imagen3, nombre3, edad3);

//     let nuevoModal3 = document.createElement('div')
//     let modalContent3 = `
        
//     <aside id="modal" class="modal">
//     <div class="content-modal">
//         <header>
//             <a href="#" class="close-modal">X</a>
//             <h2>${nombre3}</h2>
//         </header>
//         <article>

//         <div class="card">
//         <img src=${imagen3} id="img1">
//         <h4 id="titulo1">${nombre3}</h4>
//         <p id="ed1">${edad3}</p>
//         </div>
            
//         </article>
//         </div>
//         <a href="#" class="btn-close-modal"></a>
//     </aside>

//     `;
//     nuevoModal3.innerHTML = modalContent3;
//     document.body.appendChild(nuevoModal3);

// }    


