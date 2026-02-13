(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        $('#theme-toggle i').removeClass('fa-moon').addClass('fa-sun');
    }

    $(document).on('click', '#theme-toggle', function () {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            $(this).find('i').removeClass('fa-sun').addClass('fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            $(this).find('i').removeClass('fa-moon').addClass('fa-sun');
        }
    });

    // RTL Toggle Logic
    const currentDir = localStorage.getItem('dir') || 'ltr';
    if (currentDir === 'rtl') {
        document.documentElement.setAttribute('dir', 'rtl');
        $('#rtl-toggle').text('LTR');
    }

    $(document).on('click', '#rtl-toggle', function () {
        let dir = document.documentElement.getAttribute('dir');
        if (dir === 'rtl') {
            document.documentElement.setAttribute('dir', 'ltr');
            localStorage.setItem('dir', 'ltr');
            $(this).text('RTL');
        } else {
            document.documentElement.setAttribute('dir', 'rtl');
            localStorage.setItem('dir', 'rtl');
            $(this).text('LTR');
        }
    });

    // Dashboard Sidebar Toggle
    $(document).on('click', '#sidebar-toggle', function () {
        if ($(window).width() >= 992) {
            $('.sidebar').toggleClass('active');
            $('.main-wrapper').toggleClass('active');
        }
    });

    // Close sidebar on overlay click (mobile)
    $(document).on('click', function (e) {
        if ($(window).width() < 992 && $('.sidebar').hasClass('active')) {
            // Check if click is outside sidebar and not on toggle button
            if (!$(e.target).closest('.sidebar').length && !$(e.target).closest('#sidebar-toggle').length) {
                $('.sidebar').removeClass('active');
                $('.main-wrapper').removeClass('active');
                $('body').css('overflow', '');
            }
        }
    });

    // Close sidebar on escape key
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && $(window).width() < 992 && $('.sidebar').hasClass('active')) {
            $('.sidebar').removeClass('active');
            $('.main-wrapper').removeClass('active');
            $('body').css('overflow', '');
        }
    });

    // Handle window resize
    $(window).on('resize', function () {
        if ($(window).width() >= 992) {
            // Reset mobile styles when switching to desktop
            $('.sidebar').removeClass('active');
            $('.main-wrapper').removeClass('active');
            $('body').css('overflow', '');
        }
    });

})(jQuery);

