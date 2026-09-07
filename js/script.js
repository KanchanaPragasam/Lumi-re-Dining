/*!
* Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2020 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/

document.addEventListener('DOMContentLoaded', () => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Initialize AOS Animation Library
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Menu Filtering Logic
    const filterButtons = document.querySelectorAll('.btn-filter');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Re-trigger animation for filtered items
                    item.classList.remove('aos-animate');
                    setTimeout(() => {
                        item.classList.add('aos-animate');
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Contact Form Validation
    const form = document.getElementById('reservationForm');
    const successMsg = document.getElementById('success');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();

            if (form.checkValidity() === false) {
                // Bootstrap validation styles
                form.classList.add('was-validated');
            } else {
                // Simulate form submission
                const submitButton = document.getElementById('sendMessageButton');
                const originalText = submitButton.innerText;
                
                submitButton.disabled = true;
                submitButton.innerText = 'Sending...';

                setTimeout(() => {
                    successMsg.innerHTML = `
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Reservation Confirmed!</strong> We look forward to hosting you.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    `;
                    form.reset();
                    form.classList.remove('was-validated');
                    submitButton.disabled = false;
                    submitButton.innerText = originalText;
                }, 2000);
            }
        });
    }

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleBacktotop);
        document.addEventListener('scroll', toggleBacktotop);
    }
});
