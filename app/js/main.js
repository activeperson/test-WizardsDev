"use strict";


window.onload = function () {


  // VARS 
  let modalBox = document.getElementById('modal');
  let modalClose = document.getElementsByClassName('modal__close');
  let buttonContacts = document.querySelector('.header__link--border');
  let mobileBurger = document.querySelector('.header__burger');
  let header = document.querySelector('.header');
  let allItemsAccordion = document.querySelectorAll('.wrapper__title');
  let menuItem = document.querySelectorAll('.menu-item');
  let bOdy = document.body;
  let inputs = document.querySelectorAll('.form__input');
  let form = document.querySelector(".form");
  // -----
  // --------------------------- //
  function togglePopup() {
    (modalBox.classList.contains('active')) ? modalBox.classList.remove('active') : '';

  }
  modalClose[0].addEventListener("click", togglePopup, false);

  buttonContacts.onclick = function () {
    modalBox.classList.toggle('active');
  }
  bOdy.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      togglePopup();
    }
  }, false);

  // --------------------------- //


  if (window.innerWidth < 768) {
    for (let i = 0; i < allItemsAccordion.length; i++) {
      allItemsAccordion[i].addEventListener('click', function (e) {
        this.parentNode.children[2].classList.toggle('active');

      });
    }
  }





  // --------------------------- //


  mobileBurger.onclick = function () {
    header.classList.toggle('active-menu');
    document.body.style.overflow = (header.classList.contains('active-menu') ? 'hidden' : '');
  };


  // --------------------------- //



  for (let i = 0; i < menuItem.length; i++) {
    if (window.innerWidth > 768) {
      menuItem[i].addEventListener("mouseenter", toggleMenu, false);
      menuItem[i].addEventListener("mouseleave", toggleMenu, false);
    } else {
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

  // Событие на INPUT
  for (let i = 0; i < inputs.length; i++) {

    if(inputs[i].type === 'file'){
      inputs[i].addEventListener('change', function(e){
        let customstr = e.target.value.replace(/^.*\\/,'')
      e.target.labels[0].innerHTML = customstr;
      }, false);
    }
    inputs[i].addEventListener('input', function (e) {
      if (e.target.name === 'name') {
        (/^[а-яА-ЯёЁa-zA-Z\s\'\-]{1,}$/.test(e.target.value)) && (e.target.value != '') ? e.target.parentNode.classList.remove('error') : e.target.parentNode.classList.add('error');
      }
      if (e.target.name === 'phone') {
        (/^[\d\s\+\(\)]{1,}$/.test(e.target.value)) && (e.target.value != '') ? e.target.parentNode.classList.remove('error') : e.target.parentNode.classList.add('error');
      }
      if (e.target.name === 'email') {
        (/^(([^А-Яа-я<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)) && (e.target.value != '') ? e.target.parentNode.classList.remove('error') : e.target.parentNode.classList.add('error');
      }
    }, false);
  }
  //

// Событие на SUBMIT 
  form.onsubmit = function (e) {
    e.preventDefault();
    let flag = 0;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i].type === 'file') {
        let str = this[i].value.slice(this[i].value.lastIndexOf("."))
        let testfile = (str === '.pdf') || (str === '.doc') || (str === '.docs') || (str === '.txt') ? flag = 1 : flag = 0;
      }
      if (!this[i].value.replace(/^\s+|\s+$/g, '')) {
        this[i].parentNode.classList.add('error');
      } else {
        this[i].parentNode.classList.remove('error');
      }
    }
    (flag) ? alert('OKAY!') : '';

  }
//


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

