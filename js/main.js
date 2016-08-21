$(document).ready(function() {
    if($('#top-nav').length !== 0) {
        $('#top-nav').load('includes/nav.html');
    }

    if($('footer').length !== 0) {
        $('footer').load('includes/footer.html');
    }
});
