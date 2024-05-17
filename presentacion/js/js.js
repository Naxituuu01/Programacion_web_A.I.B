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

//-----------------------------------------------------------

const modalContainer = document.getElementById('contenedor-modal');
const closeButton = document.getElementById('cerrar-modal');


function abrirModal() {
  modalContainer.style.display = 'block';
}


function cerrarModal() {
  modalContainer.style.display = 'none';
}


const triggerElement = document.getElementById('boton-modal');
triggerElement.addEventListener('click', abrirModal);
closeButton.addEventListener('click', cerrarModal);

//---------------------------------------------------
function datos() {
  let mail = document.getElementById('mail').value;
  let fono = document.getElementById('fono').value;
  let com = document.getElementById('mensaje').value;
  let nombre = document.getElementById('nombre').value;

  if (nombre !== '' && mail !== '' && fono !== '' && com !== '') {
      alert("Datos enviados");
  } else {
      alert("Rellene todas las casillas");
  }
}



