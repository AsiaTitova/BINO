'use strict';

(function () {

  const removeClass = (element, className) => {
    element.classList.remove(className);
  }

  // ------ navigation ------ //

  const container = document.querySelector('.page-header');
  const toggler = document.querySelector('.page-header__toggler');
  const navigationItems = document.querySelectorAll('.navigation__link');

  const closeNavigation = () => {
    navigationItems.forEach(function (item) {
      item.addEventListener('click', function () {
        container.classList.remove('page-header--menu');
      })
    })
  }

  closeNavigation();

  toggler.addEventListener('click', function () {
    container.classList.toggle('page-header--menu');
  })

  // ------ services ------ //

  const servicesItems = document.querySelectorAll('.services__item');

  const showActiveServicesItem = () => {
    servicesItems.forEach(function (item) {
      item.onmouseenter = item.onmouseleave = handler;

      function handler (evt) {

        if (evt.type === 'mouseenter') {
          evt.target.classList.add('services__item--active');
        }

        if (evt.type === 'mouseleave') {
          evt.target.classList.remove('services__item--active');
        }
      }
    });
  }

  showActiveServicesItem();

  // ------ study paginator ------ //

  const tabs = document.querySelector('#tab-nav');
  const studySliders = document.querySelectorAll('.study__item');
  const studyPaginators = document.querySelectorAll('.paginator__button');
  const studySlidersActiveClass = 'study__item--active';
  const studyPaginatorActiveClass = 'paginator__button--active';

  const hideActiveTabs = () => {
    const arrStudySliders = Array.from(studySliders);
    const arrStudyPaginators = Array.from(studyPaginators);

    arrStudySliders.forEach(function (slider) {
      slider.classList.remove(studySlidersActiveClass);
    });

    arrStudyPaginators.forEach(function (btn) {
      btn.classList.remove(studyPaginatorActiveClass);
    });
  }

  const toggleTabs = (evt) => {
    hideActiveTabs();
    let buttonPaginators = evt.target;
    buttonPaginators.classList.add(studyPaginatorActiveClass); // выделяем выбранный пункт
    let clickedPaginatorAttribute = evt.target.getAttribute('data-slider-name');
    let activeSlider = document.getElementsByClassName(clickedPaginatorAttribute)[0];
    activeSlider.classList.add(studySlidersActiveClass); // покзаываем содержимое таба
  }

  const onPaginatorEnterPress = (evt) => {
    if (evt.keyCode === 13) {
      if (evt.target.classList.contains('paginator__button')) {
        toggleTabs(evt);
      }
    }
  }

  const onTabClick = (evt) => {
    toggleTabs(evt);
  }

  if (tabs) {
    tabs.addEventListener('click', onTabClick);
    window.addEventListener('keydown', onPaginatorEnterPress);
  }

  // ------ pricing ------ //

  const pricingItem = document.querySelectorAll('.pricing__item');

  const removeActiveClassForPricing = () => {
    pricingItem.forEach(function (plan) {
      removeClass(plan, 'pricing__item--active');
    })
  }

  const togglePricingPlan = () => {
    for (let i = 0; i < pricingItem.length; i++) {
      pricingItem[i].addEventListener('click', function () {
        removeActiveClassForPricing();
        pricingItem[i].classList.add('pricing__item--active');
      });
    }
  }

  togglePricingPlan();

  // ------ scroll up ------ //

  const scroll = document.querySelector('.scroll');

  function showButtonScrollHandler() {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 1043) {
        scroll.classList.remove('scroll--close');
      }

      if (window.scrollY < 1043) {
        scroll.classList.add('scroll--close');
      }
    });
  }

  function scrollTopWindowHandler() {
    scroll.addEventListener('click', function () {
      window.scrollTo(0,0);
    });
  }

  showButtonScrollHandler();
  scrollTopWindowHandler();

})();
