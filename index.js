
$(".main-carousel").flickity({
    cellAlign: 'left',
    wrapAround: true,
});


// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if(!menuOpen) {
//         menuBtn.classList.add('open');
//         theSidebar.classList.remove('hide-sidebar');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });
const theSidebar = document.querySelector('.sidebar');

const menuBtn = document.querySelector('.menu-btn');
const sidebarBack = document.querySelector('.sidebar__back');
//const menuBtns = document.querySelectorAll('.menu-btn');
let menuOpen = false;
// menuBtns.forEach(menuBtn => {
//     menuBtn.addEventListener('click', () => {
//         if(!menuOpen) {
//             menuBtn.classList.add('open');
//             theSidebar.classList.remove('hide-sidebar');
//             menuOpen = true;
//         } else {
//             menuBtn.classList.remove('open');
//             theSidebar.classList.add('hide-sidebar');
//             menuOpen = false;
//         }
//     });
// });

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        theSidebar.classList.remove('hide-sidebar');
        menuOpen = true;
    }
});

sidebarBack.addEventListener('click', () => {
    theSidebar.classList.add('hide-sidebar');
    menuOpen = false;
});


const backBtn = document.querySelector('.search-nav');
const searchBackBtn = document.querySelector('.search-nav__back');
// //let searchVisible = false;
// document.querySelector('.return').addEventListener('click', () => {
//     if(!searchVisible) {
//         backBtn.classList.add('the-display');
//         searchVisible = true;        
//     } else {
//         backBtn.classList.remove('the-display');
//         searchVisible = false;
//     }
//     console.log("back was clicked");
// });


const searchDisplay = document.querySelector('.hidden-btn'); 
searchDisplay.addEventListener('click', () => {
    backBtn.classList.remove('the-display');
});
searchBackBtn.addEventListener('click', () => {
    backBtn.classList.add('the-display');
});



const hoverBtnArr = document.querySelectorAll('.featured__component-btn');
const closeBtnArr = document.querySelectorAll('.featured__component-close-x')
const figCapArr = document.querySelectorAll('.featured__component-caption');

for (let i = 0; i < (hoverBtnArr.length -1); i++) {
    hoverBtnArr[i].addEventListener('click', () => {
        //console.log(`no ${i} was clicked`)
        figCapArr[i].classList.add('the-fig-opacity');
        hoverBtnArr[i].classList.add('the-hov-btn');
        closeBtnArr[i].classList.remove('the-hov-btn');
    });
    
    closeBtnArr[i].addEventListener('click', () => {
        figCapArr[i].classList.remove('the-fig-opacity');
        hoverBtnArr[i].classList.remove('the-hov-btn');
        closeBtnArr[i].classList.add('the-hov-btn');
    });
}


