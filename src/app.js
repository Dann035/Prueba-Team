// Me traigo los elementos del HTML

const containerTitle = document.querySelector('.container-title');
const postList = document.querySelector('.post-list');
const list = document.querySelectorAll('.list');
const inputAdd = document.querySelector('.inputAdd');
const inputFind = document.querySelector('.inputFind');
const btnAdd = document.querySelector('.btnAdd');
const btnFind = document.querySelector('.btn-Find');

// Agragar funciones a los botones de color

function saludar(){
    let nombre = prompt('Como te llamas ? :')
    if(nombre !== ""){
        alert(`Hola!!,Bienvenido a mi To-do-list ${nombre}`);
    }else {
        alert(`Necesito tu nombre para saludarte, no te voy a mostar la pagina😢`);
        alert(`Refresca la pagina y pon tu nombre o no te neseño la pagina 😑`);
        document.querySelector('body').style.display = 'none';
    }
}

function cambiarColorFondo (btnClass,color){
    document.querySelector(btnClass).addEventListener('click',function (){
        containerTitle.style.backgroundColor = color;
        postList.style.backgroundColor = color;
    });
};

cambiarColorFondo('.btn-bg-red','red');
cambiarColorFondo('.btn-bg-yellow','yellow');
cambiarColorFondo('.btn-bg-green','green');
cambiarColorFondo('.btn-bg-cyan','cyan');

saludar()
// Agregar funcionas fuera del cambio de color que tengo encima

btnAdd.addEventListener('click',() => {

})

