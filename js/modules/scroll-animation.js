// Animação simples do scroll
export default function scrollAnimation() {

    const boxes = document.querySelectorAll('[data-animation]');

    window.addEventListener('scroll', checkBoxes);

    checkBoxes();

    function checkBoxes() {
        const triggerBottom = window.innerHeight /5 * 4;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const footer = document.querySelector('.portfolio-footer');
            const mouse = document.querySelector('.mouse');
            const boxBottom = footer.getBoundingClientRect().top;

            if(boxTop < triggerBottom) {
                box.classList.add('show');

            } else {
                box.classList.remove('show')
            }
            
            if((boxBottom - 50) < triggerBottom) {
                mouse.classList.add('hidden');
            } else {
                mouse.classList.remove('hidden');
            }
        });
    }
}