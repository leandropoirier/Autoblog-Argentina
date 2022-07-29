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

//muestro el resultado con la siguiente funcion:
mostrarInfoVehiculo(auto)
})

const informacion = document.getElementById('infoVehiculo');

const mostrarInfoVehiculo = (auto) => {
    let veh = '';
    veh += `<p class="informacionVehiculo>Tu ${auto.marca} ${auto.modelo} sera probado en los proximos dias</p>;`
    informacion.innerHTML = veh
}

//Muestro el localStorage

const botonVehiculos = document.getElementById('buttonVehiculos');
const datosVehiculos = document.getElementById ('datosVehiculos');

botonVehiculos.addEventListener('click',() =>{
    const autos = JSON.parse(localStorage.getItem('Auto'));
    let veh = '';
    autos.forEach(auto => {
        veh += `<h2>Vehiculo esperando su aceptacion!</h2>
                <div class="card" style="width: 10rem; margin:3px;">
                    <div class="card-body">
                        <h5 class="card-title">${auto.marca}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${auto.modelo}</h6>
                    </div>
                </div>`
    });
    datosVehiculos.innerHTML = veh
})