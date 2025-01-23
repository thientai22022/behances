$(document).ready(function() {
    $('.sort-dropdowns .dropdown-button').on('click', function() {
        $('.content-container').toggleClass('active');
    });
    $('.search-input').on('click', function() {
        $('#suggestions').addClass('active');
    });
});