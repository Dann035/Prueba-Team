// Me traigo los elementos del HTML

const containerTitle = document.querySelector('.container-title');
const postList = document.querySelector('.post-list');
const list = document.querySelector('.list');
const inputAdd = document.querySelector('.inputAdd');
const inputFind = document.querySelector('.inputFind');
const btnAdd = document.querySelector('.btnAdd');
const btnFind = document.querySelector('.btnFind');


function saludar(){
    let nombre = prompt('Como te llamas ? :')
    if(nombre !==""){
        alert(`Hola!!,Bienvenido a mi To-do-list ${nombre.toUpperCase()}`);
        document.body.style.display = 'block';
    }else {
        alert(`Necesito tu nombre para saludarte, no te voy a mostar la pagina😢`);
        alert(`Refresca la pagina y pon tu nombre o no te neseño la pagina 😑`);
        document.body.style.display = 'none';
    }
}
saludar();

// Agragar funciones a los botones de color

function cambiarColorFondo (btnClass,color,colorFont){
    const btn = document.querySelector(btnClass);
    if(btn){
        btn.addEventListener('click',function (){
            containerTitle.style.backgroundColor = color;
            containerTitle.style.color = colorFont;
            postList.style.backgroundColor = color;
            postList.style.color = colorFont;
        })
    }
}
cambiarColorFondo('.btn-bg-red','red','white');
cambiarColorFondo('.btn-bg-yellow','yellow','black');
cambiarColorFondo('.btn-bg-green','green','white');
cambiarColorFondo('.btn-bg-cyan','cyan','black');
cambiarColorFondo('.house','rgb(217, 217, 217)','black');


// Agregar funcionas fuera del cambio de color que tengo encima


btnAdd.addEventListener('click', () => {
    try {
        let textInputAdd = inputAdd.value.trim();
        if (textInputAdd !== ''){
            if(list){
                let newLi = document.createElement('li');
                newLi.textContent = textInputAdd;
                list.appendChild(newLi);
                let btnDel = document.createElement('button');
                btnDel.setAttribute('class', 'btnDel');
                newLi.appendChild(btnDel);
                inputAdd.value = '';
                btnDel.addEventListener('click', () => {
                    newLi.remove();
                })
            } else {
                console.error('No se encontro el elemento .list');
            }
        }
    } catch (error) {
        console.log('Error en la parte de cracion de elementos de la lista',error)
    } 
});

btnFind.addEventListener('click', () => {
    let textInputFind = inputFind.value.trim();
    let li = list.getElementsByTagName('li');
    if (textInputFind !== ''){
        for (let i = 0; i < li.length; i++) {
            if (li[i].textContent.toLowerCase().includes(textInputFind.toLowerCase())) {
                li[i].classList.remove('hidden')
            }else{
                li[i].classList.add('hidden')
                console.log('No encontrado');
            }
        }
    } else {
        for (let i = 0; i < li.length; i++) {li[i].classList.remove('hidden')}
    }
})
