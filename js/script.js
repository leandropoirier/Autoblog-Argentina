// creamos la clase

class Auto {
    constructor(marca,modelo,email,comentarios){
        this.marca = marca ;
        this.modelo = modelo ;
        this.email = email ;
        this.comentarios = comentarios ;
    }
}

//creamos un array de objetos

const autos = []

//necesitamos tomar los datos del formulario

//creamos las variables necesarias:

const idFormulario = document.getElementById('Formulario');

idFormulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById ('modelo').value;
    const email = document.getElementById ('email').value;
    const comentarios = document.getElementById ('comentarios').value;

//creamos el objeto auto
const auto = new Auto (marca,modelo,email,comentarios);
//Agregamos los datos en un array
autos.push(auto);
//Guardamos los datos en el LocalStorage
localStorage.setItem('Auto',JSON.stringify(autos));
//Limpiamos el formulario
idFormulario.reset();

//unimos html con js mediante id's y pedimos los datos de los "autos" mediante un formulario

const form = document.getElementById("Formulario")

form.addEventListener("submit",(event) =>{
    event.preventDefault()

    let datosAutos = new FormData (event.target)

    let Auto = new Auto() (datosAutos.get ("marca"),datosAutos.get("modelo"),datosAutos.get("email"),datosAutos.get("comentarios"))
    autos.push(Auto)

    console.log(autos)

    localStorage.setItem("autos",JSON.stringify(autos))

    form.reset()
} )



//Muestro el localStorage

const botonVehiculos = document.getElementById('buttonVehiculos');
const datosVehiculos = document.getElementById ('datosVehiculos');

botonVehiculos.addEventListener('click',() =>{
    const autos = JSON.parse(localStorage.getItem('Auto'));
    let veh = '';
    autos.forEach(auto => {
        veh += `<span onclick="remove(this)" class="cerrar"style="text-decoration: none;cursor:pointer;float:right;">&times;
                <div class="card" style="width: 10rem; margin:3px;">
                    <div class="card-body"
                        <h4 class="card-title">${auto.marca}</h4>
                        <h5 class="card-subtitle mb-2 text-muted">${auto.modelo}</h5>
                    </div>
                </div>
                </span>`
    });
    datosVehiculos.innerHTML = veh
})
})


//modal

// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("myBtn");

// Cuando el usuario haga clic en el botón, abra el modal
btn.onclick = function() {
    modal.style.display = "block";
    }

// Obtenga el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en <span> (x), cierre el modal
span.onclick = function() {
    modal.style.display = "none";
    }

// Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérrelo
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}
//Cuando el usuario haga clic en (x) para cerrar las cards de los vehiculos que ingreso
function remove(el) {
    var element = el;
    element.remove();
}


//incorporo un JSON Local para mostras los vehiculos mas pedidos
const resultado = document.getElementById("resultado");
const pedidos = document.getElementById("botonModal");
pedidos.addEventListener("click",cargarJSON);
let html = '';
function cargarJSON(){
    fetch('../js/AutosMasPedidos.json')
        .then(respuesta => respuesta.json())
        .then(vehiculos => {
            vehiculos.forEach(vehiculo =>{
                html +=`
                    <li>${vehiculo.Marca} ${vehiculo.Modelo}</li>
                `;
            })
            resultado.innerHTML = html
        })
        .catch(error => console.log('hubo un error:' + error.message))

}

//modal para los vehiculos mas pedidos

// Obtener el modal
var modalPedidos = document.getElementById("modalPedidos");

// Obtener el botón que abre el modal
var botonModal= document.getElementById("botonModal");

// Cuando el usuario haga clic en el botón, abra el modal
var spans = document.getElementsByClassName("closes")[0];

// Obtenga el elemento <span> que cierra el modal 
botonModal.onclick = function() {
    modalPedidos.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x), cierre el modal
spans.onclick = function() {
    modalPedidos.style.display = "none";
}

//  Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérrelo
window.onclick = function(event) {
if (event.target == modalPedidos) {
    modalPedidos.style.display = "none";
}
}

cargarJSON();


//validacion de los datos que da el usuario
const nombre = document.getElementById('name');
const marca = document.getElementById ('brand');
const modelo = document.getElementById ('model');
const email = document.getElementById('email');
const Formulario = document.getElementById('Formulario')

//agrego una libreria
function usuario(){
if(nombre.value !='' && marca.value !='' && modelo.value !='' && año.value !='' && email.value !='')
    buttonEnviar.disable = false
}
Formulario.addEventListener('submit',enviarFormulario)

function enviarFormulario (e){
e.preventDefault()
Swal.fire('Tus datos fueron enviados!')
}