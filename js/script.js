const btnMobile = document.querySelector('#mobile-btn')


btnMobile.addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('active')
    btnMobile.classList.toggle('fa-x')

    const menuIcon = document.querySelector('#mobile-btn i')
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-x')

    } else {
        menuIcon.classList.remove('fa-x')
        menuIcon.classList.add('fa-bars')
    }
    

})




