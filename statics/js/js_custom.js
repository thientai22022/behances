$(document).ready(function() {
    $('.sort-dropdowns .dropdown-button').on('click', function() {
        $('.content-container').toggleClass('active');
    });
    $('.search-input').on('click', function() {
        $('#suggestions').addClass('active');
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.search-input').length && !$(event.target).closest('#suggestions').length) {
            $('#suggestions').removeClass('active');
        }
    });
    $('.collapsible-trigger').on('click', function() {
        const contentId = $(this).attr('aria-controls');
        const content = $('#' + contentId);
        const isExpanded = $(this).attr('aria-expanded') === 'true';
        const chevron = $(this).find('.chevron-icon');
        content.toggle();
        $(this).attr('aria-expanded', !isExpanded);
        chevron.toggleClass('active', !isExpanded); 
    });
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
    const $languageSelector = $(".language-selector");
    const $popoverContent = $(".popover-content");

    // Tạo Popper.js instance
    const popperInstance = Popper.createPopper($languageSelector[0], $popoverContent[0], {
        placement: "bottom", // Vị trí popover
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 10], // Khoảng cách từ nút đến popover
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