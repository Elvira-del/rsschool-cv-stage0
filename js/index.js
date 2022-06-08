let menuHeader = document.querySelector('.burger');
let navHeader = document.querySelector('.nav');
let linkHeader = document.querySelectorAll('.nav__link');

menuHeader.addEventListener('click', () => {
    navHeader.classList.toggle('is--active');

    if (navHeader.classList.contains('is--active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    };

    menuHeader.classList.toggle('is--change');
});

linkHeader.forEach((linkTransition) => {
    linkTransition.addEventListener('click', () => {
        if (navHeader.classList.contains('is--active')) {
            navHeader.classList.remove('is--active');
            menuHeader.classList.remove('is--change');
            document.body.style.overflow = '';
        }
    });
});