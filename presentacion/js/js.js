function inicia(){

    let user=document.getElementById('user').value;
    let pass=document.getElementById('pass').value;

    if(user== 'Alan' & pass== '1234'){

    window.location="../html/index.html";

    }
    else{

        alert("Datos Incorrescotos")
        document.getElementById('user').value=''; 
        document.getElementById('pass').value='';
    }

}


//----------------------------------------------------//




//-----------------------------------------------------------//

const modalContainer = document.getElementById('contenedor-modal');
const closeButton = document.getElementById('cerrar-modal');

// Función para abrir el modal
function abrirModal() {
  modalContainer.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
  modalContainer.style.display = 'none';
}

// Agregar eventos a los botones
const triggerElement = document.getElementById('boton-modal'); // Reemplazar con la ID de tu botón
triggerElement.addEventListener('click', abrirModal);
closeButton.addEventListener('click', cerrarModal);