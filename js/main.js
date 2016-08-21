// this jquery checks for document load as well as length of element then loads element//
$(document).ready(function() {
    if($('#top-nav').length !== 0) {
        $('#top-nav').load('includes/nav.html');
    }

    if($('footer').length !== 0) {
        $('footer').load('includes/footer.html');
    }
});
