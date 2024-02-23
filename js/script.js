const datosMensaje = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    const {nombre, email, mensaje} = datosMensaje
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarError('Todos los campos son obligatorios.')
        return;
    }
    if(nombre !== '' && email !== '' && mensaje !== ''){
        mostrarMensaje('Datos enviados correctamenete. Estaremos en contacto!')
        return;
    }
})

function leerTexto(e) {
    // console.log(e);
    // console.log(e.target.value);

    datosMensaje[e.target.id] = e.target.value;

    // console.log(datosMensaje);
}
function mostrarError(mensaje,){
    const error = document.createElement('P')
    
    error.textContent = mensaje
    error.classList.add('error')
    formulario.appendChild(error)

    const $linkDOM = document.querySelector(".error")
    $linkDOM.style.color= "red"

    setTimeout(() => {
        error.remove()
    }, 5000);
}
function mostrarMensaje(mensaje) {
    const enviado = document.createElement('P')
    enviado.textContent = mensaje
    enviado.classList.add('enviar')
    formulario.appendChild(enviado)

    const $linkDOM = document.querySelector(".enviar")
    $linkDOM.style.color= "green"

    setTimeout(() => {
        enviado.remove()
    }, 5000);
}