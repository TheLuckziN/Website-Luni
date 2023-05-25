const header1 = document.querySelector("header");

window.addEventListener("scroll", function() {
    header1.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}
// Accordion
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("#hdac")

    header.addEventListener("click", () => {

        item.classList.toggle("open");

        let description = item.querySelector(".descriptionac")

        if(item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        } else {
            description.style.height = "0px"
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }

        removeOpen(index);
    })
})

function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2) {
            item2.classList.remove("open");

            let des = item2.querySelector(".descriptionac");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}

// Botão Copiar Footer
const copiar = document.getElementById('input_group')
copiar.addEventListener("click", function() {

    document.getElementById("texto").select();
    document.execCommand('copy');
})

//Scroll Reveal
const sr = ScrollReveal ({ 
    distance: '40px',
    duration: 1050,
    delay: 200,
    reset: true
});

sr.reveal('.home-text', {origin: 'top'});
// sr.reveal('.navbar, .logo', {origin: 'bottom'});
sr.reveal('.text-center', {origin: 'top'});
sr.reveal('.bdcards', {origin: 'left'});
sr.reveal('.service-item', {origin: 'right'});
sr.reveal('.bdacc2', {origin: 'bottom'});