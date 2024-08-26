// Hiển thị form đăng nhập / đăng ký
const loginUsers = document.querySelectorAll('.js-login-user');
const modalLogin = document.querySelector('.js-modal-login');

const registerUsers = document.querySelectorAll('.js-register-user');
const modalRegister = document.querySelector('.js-modal-register');

const comeBacks = document.querySelectorAll('.js-modal-close');

const switchRegister = document.querySelector('.js-switch-register');
const switchLogin = document.querySelector('.js-switch-login');

const modalContainers = document.querySelectorAll('.js-modal-container');
const modalAuthforms = document.querySelectorAll('.js-modal-auth-form__socials');

function showLogin(){
    modalLogin.classList.add('open')
}

function closeLogin(){
    modalLogin.classList.remove('open')
}

function showRegister(){
    modalRegister.classList.add('open')
}

function closeRegister(){
    modalRegister.classList.remove('open')
}


for (const loginUser of loginUsers){
    loginUser.addEventListener('click', showLogin);
}
modalLogin.addEventListener('click', closeLogin);

for (const registerUser of registerUsers){
    registerUser.addEventListener('click', showRegister);
}
modalRegister.addEventListener('click', closeRegister);

for (const comeBack of comeBacks){
    comeBack.addEventListener('click', function(){
        closeLogin()
        closeRegister();
    });
}

switchRegister.addEventListener('click', function(){
    closeLogin()
    showRegister();
});

switchLogin.addEventListener('click', function(){
    closeRegister()
    showLogin();
});

for (const modalContainer of modalContainers){
    modalContainer.addEventListener('click', function(event){
        event.stopPropagation();
    });
}
        
for (const modalAuthform of modalAuthforms){
    modalAuthform.addEventListener('click', function(event){
        event.stopPropagation();
    });
}

// Chuyển ảnh
const listImgs = document.querySelector('.jv-list-imgs')
const imgs = document.querySelectorAll('.img-item')
const btnLeft = document.querySelector('.jv-btn-left')
const btnRight = document.querySelector('.jv-btn-right')
const length = imgs.length
let cur = 0

const handleChangeSlide = function() {
    if (cur == length - 1){
        cur = 0;
        let width = imgs[0].offsetWidth;
        listImgs.style.transform = `translateX(0px)`
        document.querySelector(`.active`).classList.remove(`active`)
        document.querySelector(`.index-item-` + cur).classList.add(`active`)
    }else{
        cur ++
        let width = imgs[0].offsetWidth;
        listImgs.style.transform = `translateX(${width * -1 * cur}px)`
        document.querySelector(`.active`).classList.remove(`active`)
        document.querySelector(`.index-item-` + cur).classList.add(`active`)
    }
}

let handleEventChangeSlide = setInterval(handleChangeSlide, 4000)

btnRight.addEventListener('click', function(){
    clearInterval(handleEventChangeSlide)
    handleChangeSlide()
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
})

btnLeft.addEventListener('click', function(){
    clearInterval(handleEventChangeSlide)
    if (cur == 0){
        cur = length - 1;
        let width = imgs[0].offsetWidth;
        listImgs.style.transform = `translateX(${width * -1 * cur}px)`
        document.querySelector(`.active`).classList.remove(`active`)
        document.querySelector(`.index-item-` + cur).classList.add(`active`)
    }else{
        cur --
        let width = imgs[0].offsetWidth;
        listImgs.style.transform = `translateX(${width * -1 * cur}px)`
        document.querySelector(`.active`).classList.remove(`active`)
        document.querySelector(`.index-item-` + cur).classList.add(`active`)
    }
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
})

// Hiển thị form thanh toán
const payUsers = document.querySelectorAll('.js-pay-user');
const modalPay = document.querySelector('.js-modal-pay');
const closePayUser = document.querySelector('.js-modal-pay-close')
const modalInfo = document.querySelector('.js-modal-pay-container');
const modalDetail = document.querySelector('.js-modal-detail-game')

function showPay(){
    modalPay.classList.add('open')
}

function closePay(){
    modalPay.classList.remove('open')
}


for (const payUser of payUsers){
    payUser.addEventListener('click', showPay);
}
modalPay.addEventListener('click', closePay);
closePayUser.addEventListener('click', closePay);

modalInfo.addEventListener('click', function(event){
    event.stopPropagation();
});

        
modalDetail.addEventListener('click', function(event){
        event.stopPropagation();
});

// Show more, Show less
const Utils = {

    addClass: function(element, theClass) {
      element.classList.add(theClass);
    },
  
    removeClass: function(element, theClass) {
      element.classList.remove(theClass);
    },
  
    showMore: function(element, excerpt) {
      element.addEventListener("click", event => {
        const linkText = event.target.textContent.toLowerCase();
        event.preventDefault();
  
        console.log(this);
        if (linkText == "show more") {
          element.textContent = "Show less";
          this.removeClass(excerpt, 'excerpt-hidden');
          this.addClass(excerpt, 'excerpt-visible');
        } else {
          element.textContent = "Show more";
          this.removeClass(excerpt, 'excerpt-visible');
          this.addClass(excerpt, 'excerpt-hidden');
        }
      });
    } 
  };

Utils.showMore(document.querySelector('.js-content-name'), document.querySelector('.js-excerpt'));



