$(document).ready(function() {
    // Hide the submenu content by default
    $('.submenu-content').hide();

    // Toggle the submenu content on clicking the parent menu item
    $('.submenu').click(function() {
        $(this).find('.submenu-content').toggle();
    });

    // Close the submenu content if clicking outside of it
    $(document).click(function(event) {
        if (!$(event.target).closest('.submenu').length) {
            $('.submenu-content').hide();
        }
    });
});