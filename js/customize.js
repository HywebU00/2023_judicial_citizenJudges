// -----  基本功能開關   ---------------------------------------------------
topNav(); // 手機版顯示nav選單
navSticky(); // 捲動時固定主選單
fatFooter(); // fatFooter是否要展開
tabFunction('.tabSet'); // tab功能
// scrollTables('table'); // table捲動功能

mobileSearch();

tableAddDataAttributes({
  elemClass: '.tableList', // 目標table
  dataName: 'title', // tableList樣式 加上 data-title
});

// 全站字體
fontSize();

// 手風琴功能
accordionFunction({
  accordion: '.questionAccordion .accordion',
  openFirst: false, // 預設先展開所有內容，使用無障礙遊走不再有手風琴效果，永遠展開內容(滑鼠點擊正常開合)
  autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
  duration: 200,
  info: {
    open: '展開', // 收合時顯示
    close: '收合', // 展開時顯示
  },
});
// 手風琴功能
accordionFunction({
  accordion: '.nodeMenu .accordion',
  openFirst: false, // 預設先展開所有內容，使用無障礙遊走不再有手風琴效果，永遠展開內容(滑鼠點擊正常開合)
  autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
  duration: 200,
  info: {
    open: '', // 收合時顯示
    close: '', // 展開時顯示
  },
});

// -----  基本功能開關   ---------------------------------------------------

// 自行加入的JS請寫在這裡
(function () {
  //cp輪播
  const cpSwiper = new Swiper('.cpSlider .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.cpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.cpSlider .nextSlider', //自行設定樣式
      prevEl: '.cpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 4,
      },
    },
  });

  //大圖輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });
  const mpSlider = new Swiper('.mpSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    autoplay: true,
    effect: 'fade',
    speed: 1500,
    fadeEffect: {
      crossFade: true,
    },

    // 切換點
    pagination: {
      el: '.mpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .nextSlider', //自行設定樣式
      prevEl: '.mpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });

  //廣告輪播
  const linkSwiper = new Swiper('.linkSlider .swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: false,
    // 切換點
    pagination: {
      el: '.linkSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.linkSlider .nextSlider', //自行設定樣式
      prevEl: '.linkSlider .prevSlider', //自行設定樣式
      disabledClass: '.linkSlider swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 5,
      },
    },
  });

  //跑馬燈
  const marqueeSwiper = new Swiper('.marquee .swiper', {
    direction: 'vertical',
    // 切換點
    // 切換箭頭
    navigation: {
      nextEl: '.marquee .nextSlider', //自行設定樣式
      prevEl: '.marquee .prevSlider', //自行設定樣式
      disabledClass: '.marquee marquee-arrow-disabled', //不可點選樣式
    },
  });

  //cp_photo
  const navSlider = new Swiper('.navSlider .swiper', {
    lazy: true, // lazy load
    preloadImages: false, // 多筆設定lazy時須設定
    centeredSlides: false, // 多筆設定lazy時須設定
    slidesPerView: 4,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const sliderFor = new Swiper('.sliderFor .swiper', {
    slidesPerView: 1, //顯示張數
    effect: 'fade', //淡入
    fadeEffect: {
      crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
    },
    pagination: {
      el: '.sliderFor .pagination',
      type: 'fraction', //顯示分頁
    },
    lazy: true,
    thumbs: {
      swiper: navSlider, //設定指向到哪個swiper，使用另一個設定的參數
    },
  });

  // videoSlider 推薦影音
  const videoSlider = new Swiper('.videoSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,
    height: 300,
    // 切換箭頭
    navigation: {
      nextEl: '.videoSlider .nextSlider', //自行設定樣式
      prevEl: '.videoSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });

  // courtSlider 國民法官地院圖片
  const courtSlider = new Swiper('.courtSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,
    height: 300,
    // 切換箭頭
    navigation: {
      nextEl: '.courtSlider .nextSlider', //自行設定樣式
      prevEl: '.courtSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });

  // courtSlider 國民法官知識＋
  const knowledgeSlider = new Swiper('.knowledgeSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,
    height: 300,
    // 切換箭頭
    navigation: {
      nextEl: '.knowledgeSlider .nextSlider', //自行設定樣式
      prevEl: '.knowledgeSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });

  //快速按鈕 功能列ＪＳ
  const docBtn = document.querySelectorAll('.quickDot a');
  function gotoSection() {
    let clickHref;
    let clickSection;
    let scrollPx;
    let top;
    let currentParent;
    docBtn.forEach((i) => {
      i.addEventListener('click', (e) => {
        e.preventDefault();
        clickHref = i.dataset.href;
        clickSection = document.querySelector(`#${clickHref}`);
        // i.parentElement.classList.add('active');
        //獲取元素到網頁頂部高度
        function getTop(el) {
          top = el.offsetTop;
          currentParent = el.offsetParent;
          while (currentParent != null) {
            top += currentParent.offsetTop;
            currentParent = currentParent.offsetParent;
          }
          return top;
        }

        getTop(clickSection);
        //扣除header覆蓋的高度
        scrollPx = top - 60;
        window.scrollTo({
          top: scrollPx,
          behavior: 'smooth',
        });
      });
    });
  }

  function btnListActive() {
    const quickSection = document.querySelectorAll('.quickSection');
    const quickBtnList = document.querySelectorAll('.quickDot li');

    let itemId;
    let activeBtn;
    quickSection.forEach((i) => {
      itemId = i.id;
      itemBtn = document.querySelector(`[data-href=${itemId}]`).parentElement;
      gsap.to(`#${itemId}`, {
        scrollTrigger: {
          trigger: `#${itemId}`, //觸及到的目標
          start: 'top 20%',
          end: 'bottom 20%',
          // markers: true, // 區間標註
          toggleClass: { targets: itemBtn, className: 'active' },
        },
      });
      gsap.to(`#${itemId}`, {
        scrollTrigger: {
          trigger: `#${itemId}`, //觸及到的目標
          start: 'top 20%',
          end: 'bottom 20%',
          // markers: true, // 區間標註
          toggleClass: { targets: `#${itemId}`, className: 'active' },
        },
      });
    });
  }
  if (docBtn !== null) {
    gotoSection();
    btnListActive();
  }
})();
