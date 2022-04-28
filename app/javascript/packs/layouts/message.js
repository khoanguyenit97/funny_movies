$(document).on('turbolinks:load', function(){
    $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
    });
    $(".message .close").delay(3000).slideUp(200, function() {
        $(this).closest('.message').transition('fade');
    });
})
