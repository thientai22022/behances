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
            $('.overlay').addClass('active');
            $('body').addClass('body_search');
            
        });
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.search-input').length && !$(event.target).closest('#suggestions').length) {
                $('#suggestions').removeClass('active');
                $('.overlay').removeClass('active');
                $('body').removeClass('body_search');
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
    
            if (sidebar.hasClass('hidden')) {
                sidebar.removeClass('hidden').addClass('visible'); 
                toggleWrapper.addClass('sidebarToggleButtonHidden'); 
                grid.addClass('col3');
                bar.addClass('active'); 
            } else {
                sidebar.removeClass('visible').addClass('hidden'); 
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
            
            sidebar.removeClass('visible').addClass('hidden'); 
            toggleWrapper.removeClass('sidebarToggleButtonHidden'); 
            grid.removeClass('col3'); 
            bar.removeClass('active'); 
        });
    }
    
    $("[data-popper-placement]").each(function () {
        const $triggerElement = $(this); 
        const placement = $triggerElement.attr("data-popper-placement"); 
        const popoverId = $triggerElement.attr("aria-controls"); 

        const $popoverContent = $("#" + popoverId);

        if (!$popoverContent.length) return;

        const popperInstance = Popper.createPopper($triggerElement[0], $popoverContent[0], {
            placement: placement,
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

        $triggerElement.on("mouseenter", function () {
            isHovering = true;
            $popoverContent.removeAttr("hidden").attr("aria-hidden", "false");
            popperInstance.update();
        });

        $triggerElement.on("mouseleave", function () {
            setTimeout(function () {
                if (!isHovering) {
                    $popoverContent.attr("hidden", "true").attr("aria-hidden", "true");
                }
            }, 100);
        });

        $popoverContent.on("mouseenter", function () {
            isHovering = true;
            $(this).removeAttr("hidden").attr("aria-hidden", "false");
        });

        $popoverContent.on("mouseleave", function () {
            isHovering = false;
            setTimeout(function () {
                if (!isHovering) {
                    $popoverContent.attr("hidden", "true").attr("aria-hidden", "true");
                }
            }, 100);
        });
    });
    if ($('.footer_fixed').length) {
        const footer = $('.footer_fixed'); 
        const footerContainer = $('.footer-container'); 
        let lastScrollTop = 0; 
      
        $(window).scroll(function() {
          const scrollTop = $(this).scrollTop(); 
          const footerHeight = footerContainer.outerHeight(); 
          const footerOffset = footerContainer.offset().top - footerHeight; 
      
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
    if ($(".grid__item-image").length) {
        $(document).ready(function() {
            let currentIndex = 0;
            const gridImages = $('.grid__item-image, .image-element-img'); 
        
            gridImages.on('click', function() {
                currentIndex = gridImages.index(this); 
                updateLightbox(currentIndex); 
        
                if ($(this).hasClass('image-element-img')) {
                    $('.lightbox-modal').addClass('custom-class'); 
                } else {
                    $('.lightbox-modal').removeClass('custom-class');
                }
        
                $('.lightbox-modal').fadeIn();
            });
        
            function updateLightbox(index) {
                const currentImage = $(gridImages[index]);
                const defaultAvatar = $('.avatar_default').attr('src');
                const projectName = $('.project-title').text();
                const projectOwner = $('.miniprofile-activator').text();
                const projectOwnerURL = $('.project-owner-name').attr('href');
                const projectURL = window.location.href;
        
                $('.lightbox-main-image').attr('src', currentImage.attr('src'));
                $('.project-name').text(projectName).attr('href', projectURL);
                $('.project-thumbnail').attr('src', defaultAvatar);
                $('.project-link').attr('href', projectURL);
                $('.project-owner').text(projectOwner).attr('href', projectOwnerURL);
            }
        
            $('.lightbox-pagination-container.previous .btn-inverted').on('click', function() {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateLightbox(currentIndex); 
                }
            });
        
            $('.lightbox-pagination-container.next .btn-inverted').on('click', function() {
                if (currentIndex < gridImages.length - 1) {
                    currentIndex++;
                    updateLightbox(currentIndex); 
                }
            });
        
            $('.lightbox-close').on('click', function() {
                $('.lightbox-modal').fadeOut();
            });
        });
    }
    if ($(".owl-product-item").length) {
        $('.owl-product-item').owlCarousel({
            loop:false,
            margin:15,
            dots:false,
            responsiveClass:true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true
                },
                1000:{
                    items:4,
                    nav:true,
                }
            }
        });
    }
    
    let tooltipTimer = false;
    let isTooltipOpen = false;
    let tooltipDelay = 100;
    let popoverTimer = false;
    let isPopoverOpen = false;
    let popoverDelay = 100;

    $(document).on('mouseover', '[data-bs-toggle=tooltip]', function(e) {
        $('.tooltip').tooltip('hide');
        
        $(e.currentTarget).tooltip({
            'trigger': 'manual',
            'html': true
        }).tooltip('show');
    });

    $(document).on('mouseleave', '[data-bs-toggle=tooltip]', function(e) {
        if (!isTooltipOpen) {
            tooltipTimer = setTimeout(function () { 
                $(e.currentTarget).tooltip('hide'); 
            }, tooltipDelay);
        }
    });

    $(document).on('mouseover', '.tooltip', function() {
        clearTooltipTimeout();
        isTooltipOpen = true;
    });

    $(document).on('mouseleave', '.tooltip', function(e) {
        tooltipTimer = setTimeout(function () { 
            $(e.currentTarget).tooltip('hide');     
        }, tooltipDelay);
        isTooltipOpen = false;
    });

    $(document).on('mouseover', '[data-bs-toggle="popover"]', function (e) {
        const popoverInstance = bootstrap.Popover.getInstance(this);
    
        if (!popoverInstance) {
            $(this).popover({
                trigger: 'manual',
                html: true,
                sanitize: false,
                customClass: 'custom-popover',
                popperConfig: function (defaultConfig) {
                    defaultConfig.modifiers.push({
                        name: 'preventOverflow',
                        options: { boundary: 'viewport' },
                    });
                    defaultConfig.modifiers.push({
                        name: 'flip',
                        options: { fallbackPlacements: [] },
                    });
                    return defaultConfig;
                },
            }).popover('show');
        } else {
            $(this).popover('show');
        }
    });
    
     $(document).on('mouseover', '[data-bs-toggle="popover"]', function (e) {
        const popoverInstance = bootstrap.Popover.getInstance(this);
        if (!popoverInstance) {
            $(this).popover('show');
        }
    });

    $(document).on('mouseleave', '[data-bs-toggle="popover"]', function (e) {
        const $target = $(e.currentTarget);
        popoverTimer = setTimeout(function () {
            $target.popover('hide');
        }, popoverDelay);
    });

    $(document).on('mouseover', '.popover', function () {
        clearPopoverTimeout();
        isPopoverOpen = true;  
    });

    $(document).on('mouseleave', '.popover', function () {
        popoverTimer = setTimeout(function () {
            $('.popover').popover('hide');
        }, popoverDelay);
        isPopoverOpen = false; 
    });

    function clearTooltipTimeout() {
        if (tooltipTimer) {                            
            window.clearTimeout(tooltipTimer);                                    
            tooltipTimer = false;
        }
    }

    function clearPopoverTimeout() {
        if (popoverTimer) {
            window.clearTimeout(popoverTimer);
            popoverTimer = false;
        }
    }
    var num = 100;  
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {   
            $('.header').addClass('fixed');
        }
        else
        {
            $('.header').removeClass('fixed');
        }
    });

});