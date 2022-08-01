// Slider da galeria
export default function slider() {
    
    // Controle de imagens em miniatura
    let slides = document.querySelectorAll('.gallery-image-component');
    let changeImage = document.querySelectorAll('.change-image');
    
    for (let i = 0; i < changeImage.length; i++) {
        changeImage[i].addEventListener("click", () => {
            for (let j = 0; j < slides.length; j++) {
                slides[j].classList.remove("selected");
            }
            for (let jj = 0; jj < changeImage.length; jj++) {
                changeImage[jj].classList.remove("selected");
            }
            slides[i].classList.add("selected");
            changeImage[i].classList.add("selected");
        });
    }
    
}