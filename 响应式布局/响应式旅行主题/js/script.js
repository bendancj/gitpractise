let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let videoBtn=document.querySelectorAll('.vid-btn');

window.onscroll=()=>{    // 滚动条事件
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click',() => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click',() => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',() => {
    loginForm.classList.add('active');// 单击login-btn（登录按钮）出现loginForm（登录表单）
    
});
formClose.addEventListener('click',() => {
    loginForm.classList.remove('active');// 单击form-close（关闭按钮）移除loginForm（登录表单）
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    });
});

var swiper = new Swiper(".review-slider", {
    spacBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteration:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});
var swiper = new Swiper(".brand-slider", {
    spacBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteration:false,
    },
    breakpoints:{
        450:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
        991:{
            slidesPerView:4,
        },
        1200:{
            slidesPerView:5,
        },
    },
});