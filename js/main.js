// this jquery checks for document load as well as length of element then loads element//
$(document).ready(function() {
    var url = window.location.href
      , lastSegment;

    if($('#top-nav').length !== 0) {
        $('#top-nav').load('includes/nav.html', function() {
            // Set the active menu item based on URL.
            lastSegment = url.split('/').pop().replace('.html', '');
            if(lastSegment) {
                $('#top-nav-' + lastSegment).addClass('active');
            } else {
                $('#top-nav-home').addClass('active');
            }            
        });
    }

    if($('footer').length !== 0) {
        $('footer').load('includes/footer.html');
    }
});

console.log(window.location.href);
