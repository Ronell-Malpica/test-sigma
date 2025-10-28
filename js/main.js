const accordiones = document.querySelectorAll('.accordion__header');
accordiones.forEach(acordion => {
    acordion.addEventListener('click', (e) => {
        const body_acordeon = acordion.parentElement.querySelector('.accordion__body');
        body_acordeon.classList.toggle('active')
        acordion.classList.toggle('open')
        console.log(acordion.classList)

    })
})