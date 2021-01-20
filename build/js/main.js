'use strict';

(function () {
  const tabs = document.querySelector("#tab-nav");
  const studySliders = document.querySelectorAll(".study__item");
  const studyPaginators = document.querySelectorAll(".paginator__button");
  const studySlidersActiveClass = "study__item--active";
  const studyPaginatorActiveClass = "paginator__button--active";

  // ------ study paginator ------ //

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
    let clickedPaginatorAttribute = evt.target.getAttribute("data-slider-name");
    let activeSlider = document.getElementsByClassName(clickedPaginatorAttribute)[0];
    activeSlider.classList.add(studySlidersActiveClass); // покзаываем содержимое таба
  }

  const onPaginatorEnterPress = (evt) => {
    if (evt.keyCode === 13) {
      if (evt.target.classList.contains("paginator__button")) {
        toggleTabs(evt);
      }
    }
  }

  const onTabClick = (evt) => {
    toggleTabs(evt);
  }

  if (tabs) {
    tabs.addEventListener("click", onTabClick);
    window.addEventListener("keydown", onPaginatorEnterPress);
  }

  // ------ pricing ------ //

  const pricingItem = document.querySelectorAll(".pricing__item");

  const removeClass = (element, className) => {
    element.classList.remove(className);
  }

  const removeActiveClassForPricing = () => {
    pricingItem.forEach(function (plan) {
      removeClass(plan, "pricing__item--active");
    })
  }

  const togglePricingPlan = () => {
    for (let i = 0; i < pricingItem.length; i++) {
      pricingItem[i].addEventListener("click", function () {
        removeActiveClassForPricing();
        pricingItem[i].classList.add("pricing__item--active");
      });
    }
  }

  togglePricingPlan();
})();
