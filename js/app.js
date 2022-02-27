const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');


window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})

function buscarClima (e) {
    e.preventDefault();


    //! Validar FORMULARIO
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;


    if ( ciudad === '' ||  pais === '') {
        // Hubo un error
        mosrtarError('Ambos Campos son Obligatorios');
        return;
    }

    //!consultar api
    consultarAPI2(ciudad, pais);

}

function mosrtarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100')

    if (!alerta) {

        //Crear alerta
        const alerta = document.createElement('DIV');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4,', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'fallo');
        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${mensaje}</span>`
        container.appendChild(alerta);

        //! ELIMINAR ALERTA
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}


//! CONSULTAR Geocoding API
function consultarAPI2(ciudad, pais) {

    const apiID = 'f0ca3f6765f8727e8b318f9407f09ee4';
    const urlgeo = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&appid=${apiID}`
    

    fetch(urlgeo)
        .then ( response => response.json() )
        .then( datos => {
            if (datos.length === 0) {
                mosrtarError('Cuidad no encontrada');
                return;
            } else {
                consultarAPI(datos[0].lat, datos[0].lon);
            }
        })
}


//! CONSULTAR current API
 function consultarAPI(lat, lon) {

    const apiID = 'f0ca3f6765f8727e8b318f9407f09ee4';
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiID}`;
    
    console.log(url);
     fetch(url)
        .then ( respuesta => respuesta.json() )
        .then ( datos => console.log(datos)) 

} 