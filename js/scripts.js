
/* =====================================
   Search box functionality
======================================== */

$('.search').on('keyup', function() {
    const $img = document.querySelectorAll('span');
    const $search = $(this).val().toLowerCase();
    for (let i = 0; i < $img.length; i+=1) {
        input = $img[i].getAttribute('data-title');
        if (input.toLowerCase().indexOf($search) > -1) {
            $img[i].style.display = '';
        } else {
            $img[i].style.display = 'none';
        }
    }
});

/* =====================================
   Lightbox options
======================================== */

lightbox.option({
  'showImageNumberLabel': false,
  'fitImagesInViewport' : true
})
