


window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        
        const header = document.querySelector('header');
        
        header.classList.toggle('sticky', window.scrollY > 0)
    })
    const menuBtn = document.querySelector('.menu-btn')
    const menuBtn2 = document.querySelector('.menu-icon')
    const navigation = document.querySelector('.navigation')
    const navigationItems = document.querySelectorAll('.navigation a')
   

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        menuBtn2.classList.toggle('active')
        navigation.classList.toggle('active')
    })
  



    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
            menuBtn2.classList.remove('active')
        })
    })

    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 500)
    })

    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        
    })
    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal')

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active')
            }
        }
    })

})



$(function () {
    $(".card1").click(function () {
        $(".hide-blocks").css({
            display: 'block',
        })
        $(".portfolio").dblclick(function () {
            $(".hide-blocks").css({
                display: 'none',
            })
        })

        $(".hide-blocks .fa-times").click(function () {
            $(".hide-blocks").css({
                display: 'none',
            })
        })
    })

    $(".card2").click(function () {
        $(".hide-blocks2").css({
            display: 'block',
        })
        $(".portfolio2").dblclick(function () {
            $(".hide-blocks2").css({
                display: 'none',
            })
        })

        $(".hide-blocks2 .fa-times").click(function () {
            $(".hide-blocks2").css({
                display: 'none',
            })
        })
    })
    $(".card3").click(function () {
        $(".hide-blocks3").css({
            display: 'block',
        })
        $(".portfolio3").dblclick(function () {
            $(".hide-blocks3").css({
                display: 'none',
            })
        })

        $(".hide-blocks3 .fa-times").click(function () {
            $(".hide-blocks3").css({
                display: 'none',
            })
        })
    })
    $(".card4").click(function () {
        $(".hide-blocks4").css({
            display: 'block',
        })
        $(".portfolio4").dblclick(function () {
            $(".hide-blocks4").css({
                display: 'none',
            })
        })

        $(".hide-blocks4 .fa-times").click(function () {
            $(".hide-blocks4").css({
                display: 'none',
            })
        })
    })
    $(".card5").click(function () {
        $(".hide-blocks5").css({
            display: 'block',
        })
        $(".portfolio5").dblclick(function () {
            $(".hide-blocks5").css({
                display: 'none',
            })
        })

        $(".hide-blocks5 .fa-times").click(function () {
            $(".hide-blocks5").css({
                display: 'none',
            })
        })
    })
    $(".card6").click(function () {
        $(".hide-blocks6").css({
            display: 'block',
        })
        $(".portfolio6").dblclick(function () {
            $(".hide-blocks6").css({
                display: 'none',
            })
        })

        $(".hide-blocks6 .fa-times").click(function () {
            $(".hide-blocks6").css({
                display: 'none',
            })
        })
    })
    $(".click").click(function () {
        $(".hide-blocks7").css({
            display: 'block',
        })
        $(".portfolio7").dblclick(function () {
            $(".hide-blocks7").css({
                display: 'none',
            })
        })

        $(".hide-blocks7 .fa-times").click(function () {
            $(".hide-blocks7").css({
                display: 'none',
            })
        })
    })

   
})
