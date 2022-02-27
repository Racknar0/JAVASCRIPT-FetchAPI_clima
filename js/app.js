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
