const btnenviar = document.querySelector('#enviar');
const formularioEnviar = document.querySelector('#enviar-mail');
const btnreset = document.querySelector('#resetBtn');
//VARIABLES CAMPOS
const contenedordeerror = document.querySelector('#sk-chase');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Event Listener

eventListeners();
function eventListeners(){
// avisa que arranca la app al cargar todo el documento
    document.addEventListener('DOMContentLoaded', iniciarapp);
//campos

email.addEventListener('blur', validarFormulario);
asunto.addEventListener('blur', validarFormulario);
mensaje.addEventListener('blur',validarFormulario);
formularioEnviar.addEventListener('submit', enviaremail);
resetero.addEventListener('click', resetearformulario);




}



// funciones


function iniciarapp(){
    console.log('iniciando');
    btnenviar.disabled = true;
    btnenviar.classList.add('curso-not-allowed', 'opacity-50');
}
//activa el formulario
function validarFormulario(e){




    if(e.target.value.length > 0 ){
        //PONER VERDE/ROJO
        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border', 'border-green-500');

        //SI EXISTE EL MENSAJE DE ERROR QUE LO ELIMINE, SI NO NO LO ENCUENTRA Y TIRA ERROR

    }

    else{
        //PONER VERDE/ROJO ELIMINAR EX ERROR AL PRINCIPIO
        e.target.style.borderBottomColor = 'Red';
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        errorHTML('TODOS LOS CAMPOS SON OBLIGATORIOS');
        btnenviar.disabled = true;
        btnenviar.classList.add('curso-not-allowed', 'opacity-50');

    
        

    }
    //validacion de email
    if(e.target.type==='email'){

        if(er.test(e.target.value)){
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border','border-green-500');
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }

            
        
        }  else{
            const error = document.querySelector('p.error');

            if(error){
                error.remove();
            }
            e.target.style.borderBottomColor = 'Red';
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border', 'border-red-500');
            errorHTML('EMAIL NO VALIDO');
            btnenviar.disabled = true;
            btnenviar.classList.add('curso-not-allowed', 'opacity-50');
        }
    }
    
    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        btnenviar.classList.remove('cursor-not-allowed', 'opacity-50');
        btnenviar.disabled = false;
       
      


    }
    
}
function errorHTML(mensaje){

    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100','text-red-500', 'p-3', 'mt-5','text-center', 'error');
    
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
      //  formularioEnviar.insertBefore(mensajeError, document.querySelectorAll('.mb-10')[0]); //tambien pero de otra forma cuando se repiten
      formularioEnviar.appendChild(mensajeError, document.querySelectorAll('.mb-10')); // al ultimo

    }
    
    

}

function enviaremail(e){
e.preventDefault();
console.log('enviando');
//mostrar spinner
const spinner = document.querySelector('#spinner');
spinner.style.display = 'flex';
//tiempo de espera en milisegundos
setTimeout(() => {
    spinner.style.display = 'none';
    //mensaje que se envio
    const parrafo = document.createElement('p'); // CREO EL PARRAFO
    parrafo.textContent ='"El mensaje se envio correctamente"'; // LE AGREGO EL CONTENIDO AL PARRAFO
    parrafo.classList.add('text-center', 'my-10', 'p-5', 'bg-green-500', 'text-white', 'upper-case', 'font-bold') //LE AGREGO LA CLASE AL PARRAFO
    formularioEnviar.insertBefore(parrafo, spinner); //INSERTA AL FORMULARIO EL PARRAFO Y EL PARRAFO ANTES DEL SPINNER 
    setTimeout(() => {
        parrafo.remove(); //elimina el parrafo
        resetearformulario();
    }, 5000);
}, 3000);



}

function resetearformulario()
{
formularioEnviar.reset();
iniciarapp();
}

