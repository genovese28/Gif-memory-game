$(function() {
  $('.container').on('click', function(event) {
    let clicked = $(event.target);
    clicked.css('backgroundColor', 'blue');
  });
});
