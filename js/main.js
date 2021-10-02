const contenedor = document.querySelector('#contenedor');

document.querySelector('#btn-menu').addEventListener('click', () => {
    contenedor.classList.toggle('active')
})