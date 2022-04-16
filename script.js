let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.nav-bar');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav-bar a');

window.onscroll = () => {
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');

    section.forEach(sec =>{

      let top = window.screenY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      if(top => offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .nav-bar a[href*='+id+']').classList.add('active');
        });
      };

      
    function loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
    }
    
    function fadeOut(){
        setInterval(loader, 3000);
    }
    
    window.onload = fadeOut(); 
       
    

    });
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(" .home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(" .review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });