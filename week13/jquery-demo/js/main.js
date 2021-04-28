$(document).ready(function() {
    var i = 1;
    $(window).click(function() {
      console.log(i);
      if (i == 1) {
        $('.red-square').addClass('hidden');
        $('.blue-square').removeClass('hidden');
        i = i + 1;
        console.log('first click');
      } else if (i == 2 ) {
        $('.blue-square').addClass('hidden');
        $('.yellow-square').removeClass('hidden');
        i = i + 1;
        console.log('second click');
      } else {
        $('.yellow-square').addClass('hidden');
        $('.red-square').removeClass('hidden');
        i = 1;
        console.log('third click');
      }
    });
});
