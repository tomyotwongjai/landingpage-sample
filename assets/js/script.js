/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /* MENU SHOW */
    /*  Validate for constant existance */

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

    /* MENU HIDDEN */
    /*  Validate for constant existance */

if(navClose){
    navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
    })
}

 /* REMOVE MENU MOBILE*/
 const navLink = document.querySelectorAll('.nav-link')

 function linkAction(){
     const navMenu = document.getElementById('nav-menu')

     navMenu.classList.remove('show-menu')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE BACKGROUND HEADER */

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SCROLL UP */

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)

/* SCROLL SECTIONS ACTIVE LINK */

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
        })
    }
    window.addEventListener('scroll', scrollActive)

    /* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-header, .section-title`,{delay: 600})
sr.reveal(`.home-footer`,{delay: 700})
sr.reveal(`.home-img`,{delay: 900, origin: 'top'})

sr.reveal(`.products-card, .footer-logo, .footer-content, .footer-copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs-data`,{origin: 'left', interval: 100})


