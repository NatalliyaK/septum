document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById('menuButton').addEventListener('click', function() {
    let menu = document.querySelector('.menu__mov');
    if (menu.classList.contains('menu-shown')) {
      menu.classList.remove('menu-shown');
    } else {
      menu.classList.add('menu-shown');
    }
  });

  document.getElementById('menuCloseButton').addEventListener('click', function() {
    let menu = document.querySelector('.menu__mov');
    if (menu.classList.contains('menu-shown')) {
      menu.classList.remove('menu-shown');
    }
  });

//typing
  window.onload = function() {
    let text = "Перегородки";
    let container = document.getElementById('typing-text');
    let index = 0;

    function type() {
      if (index < text.length) {
        container.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Задержка перед следующим символом
      }
    }
    if (container) {
      type();
    }
  }

  //accordion

 let accordionItems = document.querySelectorAll('.portfolio__accordion-item'),
   nextButtons = document.querySelectorAll('.next'),
   portfolioNavNumber = document.querySelectorAll('.portfolio__nav-number'),
    prevButtons = document.querySelectorAll('.prev');

  function addClassNumber (itemIndex) {
    portfolioNavNumber.forEach((element, elementIndex) => {
      if(elementIndex === itemIndex) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            accordionItems.forEach((item, itemIndex) => {
                if(itemIndex === index + 1) {
                    requestAnimationFrame(() => {
                        item.style.width = '110rem';
                        addClassNumber (itemIndex);
                    });
                } else {
                    item.style.width = '10rem';
                }
            });
        });
    });

  prevButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      accordionItems.forEach((item, itemIndex) => {
        if(itemIndex === index) {
          item.style.width = '110rem';
          addClassNumber (itemIndex);
        } else {
          item.style.width = '10rem';
        }
      })
    })
  })

    //accordion mob
  const portfolioItemMob = document.querySelectorAll('.portfolio__item-mob');

  portfolioItemMob.forEach((item) => {
    item.addEventListener('click', (el) => {
      // Удалить класс 'active' у всех слайдов
      portfolioItemMob.forEach((item) => {
        item.classList.remove('active');
      });
      // Добавить класс 'active' к слайду, по которому был сделан клик
      el.target.classList.add('active');
    });
  });

  // buttonRequest

  const buttonRequest = document.querySelectorAll('.buttonRequest'),
    popup = document.querySelector('.popup__wrapper'),
    closeBtn = document.querySelector('.closeBtn');

  buttonRequest.forEach(btn => {
    btn.addEventListener('click', ()=> {
      popup.classList.add('active');
    })
  })

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  })

  // animation
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
        observer.unobserve(change.target);
      } else { change.target.classList.remove('element-show'); }
    });
  }
  let options = {
    threshold: [0.2]
  };


  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  let elementsAnimationRight = document.querySelectorAll('.element-animation-right');
  let elementsAnimationLeft = document.querySelectorAll('.element-animation-left');
  let show = document.querySelectorAll('.element-animation-opacity');

  function animationElement(elements) {
    for (let elm of elements) {
      observer.observe(elm);
    }
  };

  if (elements) {
    animationElement(elements);
  }

  if (elementsAnimationRight) {
    animationElement(elementsAnimationRight);
  }

  if(elementsAnimationLeft){
    animationElement(elementsAnimationLeft);
  }

    if(show){
        animationElement(show);
    }
//  showSuccessModal

  const popupThank = document.querySelector('.thank-popup__wrapper');

  function openModal() {
    popupThank.classList.add('active');
  }

  function showSuccessModal () {
    openModal()
  }

  // form

  function handleForm(formInf) {
    formInf.addEventListener('submit', function (event) {
      let controls = this.querySelectorAll('input[required]');
      let isValid = true;
      controls.forEach(( control ) => {
        if (!control.value) {
          // Если поле ввода пустое, подчеркиваем его красным и предотвращаем отправку формы
          control.style.borderBottom = '0.1rem solid red';
          isValid = false;
        }
        // Добавляем обработчик события input, чтобы убрать красное подчеркивание при вводе
        control.addEventListener('input', function () {
          this.style.borderBottom = '';
        });

// Добавляем обработчик события scroll, чтобы убрать красное подчеркивание при прокрутке
        window.addEventListener('scroll', function () {
          control.style.borderBottom = '';
        });

// Добавляем обработчик события blur, чтобы убрать красное подчеркивание, когда элемент теряет фокус
        control.addEventListener('blur', function () {
          this.style.borderBottom = '';
        });
      })

      event.preventDefault();

      if (isValid) {
        showSuccessModal();
        controls.forEach(control => {
          control.value = '';
        });
      }
    })
  }

  const formSend = document.querySelectorAll('.request__form');

  if(formSend) {
    formSend.forEach(item => {
      handleForm(item)
    })
  }

  //drop

  const fileWrap = document.querySelectorAll('.file-upload');

  if (fileWrap.length > 0) {

    fileWrap.forEach(fileW => {

      const inputFile = fileW.querySelector('.file-upload__input');
      // const res = fileW.querySelector('.form-contacts__file-res');

      // inputFile.addEventListener("change", (ev) => {
      //   res.textContent = ev.target.files[0].name;
      // })

      ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileW.addEventListener(eventName, preventDefaults, false)
      })

      fileW.addEventListener('drop', (ev) => {
        let dt = ev.dataTransfer;
        let files = dt.files;
        // res.textContent = files[0].name;
        inputFile.files = files;
        // console.log(inputFile.files);
        processFiles(files);
      }, false)


    })


  }

  function preventDefaults(ev) {
    ev.preventDefault()
    ev.stopPropagation()
  }

  function processFiles(files) {
    let file = files[0];

    let reader = new FileReader();

    reader.onload = function (e) {
      // console.log(e);
    };

    // Начинаем считывать изображение
    reader.readAsDataURL(file);
  }

    // 3 point
    let ps = document.querySelectorAll('.point');
    ps.forEach(function(p) {
        let maxLength;

        if (window.matchMedia('(min-width: 1020px)').matches) {
            maxLength = 98;
        } else if (window.matchMedia('(min-width: 400px)').matches) {
            maxLength = 150;
        } else {
            maxLength = 200;
        }

        p.dataset.originalText = p.innerText;
        if (p.innerText.length > maxLength) {
            p.innerText = p.innerText.slice(0, maxLength) + '...';
        }
    });


    //rewiews popop

  const linc = document.querySelectorAll('.linc');
  const reviewsPopup = document.querySelector('.reviews-popup__wrapper');
  const closeBtnRew = document.querySelector('.closeBtnRew');

  closeBtnRew.addEventListener('click', () => {
    reviewsPopup.classList.remove('active');
  })

    linc.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            reviewsPopup.classList.add('active');
            let title = item.parentElement.parentElement.querySelector('h3').innerText;
            let text = item.parentElement.parentElement.querySelector('p').dataset.originalText; // Используем оригинальный текст

            let popupTitle = document.querySelector('.reviews-popup h3');
            let popupText = document.querySelector('.reviews-popup p');
            popupTitle.innerText = title;
            popupText.innerText = text;
        })
    });



//map

    ymaps.ready(function () {

        let myMap = new ymaps.Map("YMapsID", {
            center: [55.630324, 37.443946],
            zoom: 11,
        });


        let myPlacemark = new ymaps.Placemark([55.634745, 37.439077], {
        });
        myMap.behaviors.disable('scrollZoom');


        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            myMap.behaviors.disable('drag');
        }

        myMap.geoObjects.add(myPlacemark);

    });
//observer

    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { rootMargin: '0px 0px -50% 0px' });

    document.querySelectorAll('.about__content div').forEach(block => {
        observer2.observe(block);
    });

});