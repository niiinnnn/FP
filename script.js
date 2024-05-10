//ვერ მოვასწარი ბევრი რამე სამწუხაროდ და რატომღაც არ მუშაობს, თითქოს სწორია ყველაფერი მაგრამ ფუნქციონალი ვერ დავამატე არ ვიცი რაშია პრობლემა

const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[trigger-close]');
const overlay = document.querySelector('[data-overlay]');

for (let i =0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target,
    targetEl = document.querySelector('#${currentId}')

    const openData = function() {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };
    triggerOpen[i].addEventListener('click', function() {
        targetEl.classList.add('active');
        overlay.classList.add('active');
    } );

    targetEl.querySelector('[close-button]').addEventListener('click' , openData);
    overlay.addEventListener('click', openData);
}   

//mobile-menu submenu
const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener(click, function(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
    if(this.closest('.has-child').classList != 'active') {
        this.closest('.has-child').classList.toggle('active');
    }
}))

//slider




//carousel
  const carousel = new Swiper('.carouselbox', {
   
    
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
  
    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        481: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        centeredSlides: false,
        },
        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            centeredSlides: false,
            }
        }
   
   
  });





  