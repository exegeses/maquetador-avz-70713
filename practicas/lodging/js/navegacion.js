const menu = document.querySelector('header nav');
const btn = document.querySelector('header span');

/** Variable auxiliar:
    true es desplegado
    false es compactado
*/
let estado = false;

function showHide()
{
    if( estado == false ){
        /* Desplazamos la barra de navegación */
        menu.style.transform = 'translateY(32px)';
        /* Modificamos la imagen */
        btn.innerHTML = '<img src = "imgs/close.png">';
        /* Seteamos estado en true */
        estado = true;
    }
    else {
        menu.style.transform = 'translateY(-216px)';
        btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '            <path d="M3 12H21" stroke="#2C2D36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '            <path d="M3 6H21" stroke="#2C2D36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '            <path d="M3 18H21" stroke="#2C2D36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '            </svg>';
        estado = false;
    }
}
btn.addEventListener(
        'click',
    ()=>{
            showHide();
    }
);