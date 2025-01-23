$(document).ready(function() {
    if ($('.sort-dropdowns .dropdown-button').length) {
        $('.sort-dropdowns .dropdown-button').on('click', function() {
            $(this).toggleClass('active');
            $('.content-container').toggleClass('active');
        });
    }
    if ($('.nav-hamburger-button').length) {
        $('.nav-hamburger-button').on('click', function() {
            $('.nav-hamburger-menu').toggleClass('active');
            $('.option_over').toggleClass('active');
        });
    }
    if ($('.nav-close-button,.option_over').length) {
        $('.nav-close-button,.option_over').on('click', function() {
            $('.nav-hamburger-menu').removeClass('active');
            $('.option_over').removeClass('active');
        });
    }
    if ($('.search-input').length) {
        $('.search-input').on('click', function() {
            $('#suggestions').addClass('active');
        });
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.search-input').length && !$(event.target).closest('#suggestions').length) {
                $('#suggestions').removeClass('active');
            }
        });
    }
    if ($('.collapsible-trigger').length) {
    $('.collapsible-trigger').on('click', function() {
        const contentId = $(this).attr('aria-controls');
        const content = $('#' + contentId);
        const isExpanded = $(this).attr('aria-expanded') === 'true';
        const chevron = $(this).find('.chevron-icon');
        content.toggle();
        $(this).attr('aria-expanded', !isExpanded);
        chevron.toggleClass('active', !isExpanded); 
    });
    }
    if ($('.toggle-button').length) {
        $('.toggle-button').on('click', function() {
            const sidebar = $('.search-sidebar');
            const toggleWrapper = $('.toggle-wrapper');
            const grid = $('.js-grid');
            const bar = $('.search-bar');
        
            if (sidebar.is(':hidden')) {
                sidebar.show(); 
                toggleWrapper.addClass('sidebarToggleButtonHidden'); 
                grid.addClass('col3');
                bar.addClass('active'); 
            } else {
                sidebar.hide(); 
                toggleWrapper.removeClass('sidebarToggleButtonHidden');
                grid.removeClass('col3'); 
                bar.removeClass('active'); 
            }
        });
    }
    if ($('.sidebar-header-button').length) {
        $('.sidebar-header-button').on('click', function() {
            const sidebar = $('.search-sidebar');
            const toggleWrapper = $('.toggle-wrapper');
            const grid = $('.js-grid'); 
            const bar = $('.search-bar');
        
            sidebar.hide(); 
            toggleWrapper.removeClass('sidebarToggleButtonHidden'); 
            grid.removeClass('col3'); 
            bar.removeClass('active'); 
        });
    }
    if ($('.language-selector').length) {
        const $languageSelector = $(".language-selector");
        const $popoverContent = $(".popover-content");

        const popperInstance = Popper.createPopper($languageSelector[0], $popoverContent[0], {
            placement: "bottom",
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, 10],
                    },
                },
            ],
        });

        let isHovering = false;

        $languageSelector.on("mouseenter", function () {
            isHovering = true;
            $popoverContent.removeAttr("hidden"); 
            popperInstance.update(); 

        $languageSelector.on("mouseleave", function () {
            setTimeout(function () {
                if (!isHovering) {
                    $popoverContent.attr("hidden", "true"); 
                }
            }, 100); 
        });

        $popoverContent.on("mouseenter", function () {
            isHovering = true;
            $(this).removeAttr("hidden");
        });

        $popoverContent.on("mouseleave", function () {
            isHovering = false;
            setTimeout(function () {
                if (!isHovering) {
                    $popoverContent.attr("hidden", "true");
                }
            }, 100); 
        });
    });
    }
    if ($('.footer_fixed').length) {
        const footer = $('.footer_fixed'); 
        const footerContainer = $('.footer-container'); 
        let lastScrollTop = 0; 
      
        $(window).scroll(function() {
          const scrollTop = $(this).scrollTop(); 
          const footerOffset = footerContainer.offset().top-1000; 
      
          if (scrollTop >= footerOffset) {
            if (scrollTop > lastScrollTop) {
              footer.addClass('footer-hidden'); 
            } else {
              footer.removeClass('footer-hidden'); 
            }
          } else {
            footer.removeClass('footer-hidden'); 
          }
      
          lastScrollTop = scrollTop; 
        });
    }
});