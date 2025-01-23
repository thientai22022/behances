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
        if (sidebar.is(':hidden')) {
            sidebar.show(); 
            toggleWrapper.addClass('sidebarToggleButtonHidden'); 
        } else {
            sidebar.hide(); 
            toggleWrapper.removeClass('sidebarToggleButtonHidden');
        }
    });
    $('.sidebar-header-button').on('click', function() {
        const sidebar = $('.search-sidebar');
        const toggleWrapper = $('.toggle-wrapper');
        sidebar.hide(); 
        toggleWrapper.removeClass('sidebarToggleButtonHidden'); 
    });
});