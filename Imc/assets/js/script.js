const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('evento previnido');
    setResultado('Olá mundo')
});


function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}