var menubutton = document.querySelector('.menubutton');
console.log(menubutton);

var sidebar = document.querySelector('.side-nav');
console.log(sidebar);

var smallSidebar = document.querySelector('.smoll-side-nav');
console.log(smallSidebar);

var rightDiv = document.querySelector('.right-side');
console.log(rightDiv);





menubutton.addEventListener('click', function () {
    sidebar.classList.toggle('hide-sidebar');
    smallSidebar.classList.toggle('show-small-sidebar');

    if(sidebar.classList.contains('hide-sidebar')) {
        rightDiv.style.width = '95%';
    } else {
        rightDiv.style.width = '82%';
    }
});  





var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 20,
    loop:true,
    mousewheel:true,
    
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });