//Change header background
function scrollHeader(){
    const header = document.getElementById('header');

    //When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);


// //Services modal
// const modalViews = document.querySelectorAll('.services-modal'),
//       modalBtn = document.querySelectorAll('.services-button'),
//       modalClose = document.querySelectorAll('.services-modal-close');

// let modal = function(modalClick){
//     modalViews[modalClick].classList.add('active-modal');
// }

// modalBtn.forEach((mb, i) => {
//     mb.addEventListener('click', () =>{
//         modal(i)
//     });
// });

// modalClose.forEach((mc) =>{
//     mc.addEventListener('click', () =>{
//         modalViews.forEach((mv) =>{
//             mv.classList.remove('active-modal')
//         });
//     });
// });


//Mixitup filter portfolio
let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});


//Active work link
const linkWork = document.querySelectorAll('.work-item');

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork));



//Scroll section active link
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');

        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);


//Theme Changer Button
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

//Previously selected topic if user selected
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-Icon')

//We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

//We validate if the user previously chose a theme
if(selectedTheme){
    //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    //We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



//Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home-data`)
sr.reveal(`.home-handle`, {delay: 700})
sr.reveal(`.home-social, .home-scroll`, {delay: 900, origin: 'bottom'})