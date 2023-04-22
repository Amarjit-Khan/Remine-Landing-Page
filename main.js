// < --Initialize Scroll reveal-- >

const sr = ScrollReveal({
    origin: 'top',
    distance: '3rem',
    duration: '2500',
    delay: '400',
})

sr.reveal('.done-item')
sr.reveal('.done-item', { delay: 900, origin: 'bottom' })
sr.reveal('.about-heading, .blogs-heading, .achi-heading, .patro-heading', { delay: 500, interval: 100, origin: 'top' })
sr.reveal('.blogs-card', { delay: 800, origin: 'bottom' })
sr.reveal('.achi-card', { delay: 900, origin: 'right' })
sr.reveal('.contact-heading, .contact-company, .contact-row', { delay: 1000, interval: 100, origin: 'top' })
sr.reveal('.contact-icons', { delay: 1100, origin: 'right', interval: 100 })

// < --Initialize Swiper-- >

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});