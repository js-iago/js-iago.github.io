// Voltar ao topo
export default function backToTop() {

    const scrolltop = document.querySelector('.scrolltop');

    function backToTop() {
        window.scrollTo ({
            top: 0,
            behavior: 'smooth',
        });
    }

    scrolltop.addEventListener('click', backToTop);
}