//ubicamos elementos dentro del DOM
const btn  = document.querySelector('header img[alt="menu"]');
const menu = document.querySelector('header nav');

let flag = 0; /* 0 collapse | 1 desplegado */

/* despliega y colapsa el menu desplegable */
function showHide()
{
    if( flag == 0 ) {
        menu.style.transform = 'translateY(48px)';
    }
    else{
        menu.style.transform = 'translateY(-208px)';
    }
}
/* cambia el ícono del hamburger */
function swapImag()
{
    if( flag == 0 ) {
        btn.src = 'imgs/close.png'; /* cambia a ícono de cerrar */
        flag = 1;
    }
    else{
        btn.src = 'imgs/hamburger.png'; /* cambia a ícono hamburger */
        flag = 0;
    }
}
btn.addEventListener(
        'click',
        ()=>{
            showHide();
            swapImag();
        }
);