"use strict";


window.onload = function () {


  // VARS 
  let modalBox = document.getElementById('modal');
  let modalClose = document.getElementsByClassName('modal__close');
  let buttonContacts = document.querySelector('.header__link--border');
  let mobileBurger = document.querySelector('.header__burger');
  let header =  document.querySelector('.header');
  let allItemsAccordion = document.querySelectorAll('.wrapper__title');
  let menuItem = document.querySelectorAll('.menu-item');
  let bOdy = document.body;
  // -----
  // --------------------------- //
  function togglePopup() {
    (modalBox.classList.contains('active')) ? modalBox.classList.remove('active') : '';

  }
  modalClose[0].addEventListener("click", togglePopup, false);

  buttonContacts.onclick = function () {
    modalBox.classList.toggle('active');
  }
  bOdy.addEventListener('keydown', function(e){
    if(e.which === 27){
      togglePopup();
    }
  }, false);

  // --------------------------- //


  if(window.innerWidth < 768){
    for(let i = 0; i < allItemsAccordion.length; i++){
      console.log(allItemsAccordion.length);
      allItemsAccordion[i].addEventListener('click', function(e){
        this.parentNode.children[2].classList.toggle('active');
        
      });
    }
  }





  // --------------------------- //
  

  mobileBurger.onclick = function(){
    header.classList.toggle('active-menu');
    document.body.style.overflow = (header.classList.contains('active-menu') ? 'hidden' : '');
  };


  // --------------------------- //



  for (let i = 0; i < menuItem.length; i++) {
    if(window.innerWidth > 768){
      menuItem[i].addEventListener("mouseenter", toggleMenu, false);
      menuItem[i].addEventListener("mouseleave", toggleMenu, false);
    }else{
      menuItem[i].addEventListener("click", toggleMenu, false);
    }

  }

  function toggleMenu() {
    if (this.children.length > 1) {
      this.classList.toggle("active");
    } else {
      return false;
    }
  }

  


  



  // ----------------------- JQ ---------------- // 
  $('.slider__wrapper-items').on('init', function () {
    $(this).css('opacity', '1');
  });

  $('.slider__wrapper-items').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // ----------------------- JQ ---------------- // 


}

