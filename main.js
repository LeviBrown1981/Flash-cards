$(document).ready( function() {
  let header = $('h1')
  console.log(header)

  $('#new').on('click', function() {
    var flash = $('#flash')
  });
  
  $('.remove').on('click', function() {
    alert('Button clicked');
  });

  $(document).on('click', '.remove', function() {
    $(this).parents('li').remove();
    updateTotal();
  });  
})