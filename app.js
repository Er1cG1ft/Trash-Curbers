var main = function() {
  $(".video").css({
    'width': ($(".header").width() + 'px')
  });
}

$(document).ready(main);