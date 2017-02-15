$(function(){
  $('body').on('click', 'button', function(){
    $('body').toggleClass('dark');
    if ($('button').attr('class')==='on'){
      $('button').attr('class', 'off');
      $('.status').text('Who turned out the lights?!');
    } else {
      $('button').attr('class', 'on');
      $('.status').text("It's so bright in here!");
    }
  });
});
