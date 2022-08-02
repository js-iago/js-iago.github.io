// Scroll suave interno
export default function scrollToSection() {

    // const links = document.querySelectorAll('.portfolio-navbar a[href^="#"]');

    // links.forEach(item => {
    //     item.addEventListener('click', scrollToSection);
    // });

    // function scrollToSection(e) {
    //     e.preventDefault();
    //     const href = e.currentTarget.getAttribute('href');
    //     const section = document.querySelector(href);
    //     const topo = section.offsetTop;

    //     window.scrollTo({
    //         top: topo,
    //         behavior: 'smooth',
    //     });
    // }

    // for(let i = 0; i < links.length; i++) {
    //     links[i].addEventListener('click', () => {
    //         for(let j = 0; j < links.length; j++) {
    //             links[j].classList.remove('active');
    //         }
    //         links[i].classList.add('active');
    //     });
    // }

    // ScrollSpy
    let section = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('.portfolio-navbar a[href^="#"]');

    window.addEventListener('scroll', () => {
        section.forEach(item => {
            let top = window.scrollY;
            let offset = item.offsetTop;
            let height = item.offsetHeight;
            let id = item.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navlinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('.portfolio-navbar a[href*=' + id + ']').classList.add('active')
                });
            }
        });
    });
}