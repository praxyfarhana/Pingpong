    //back-end//
var number;
function pingpong() {
  for(var i=1; i<=number; i++)
  if((i % 3 === 0) && (i % 5 === 0)) {
    $(".output").append('<li>pingpong</li>');
  }
  else if(i % 3 ===0) {
    $(".output").append('<li>ping</li>');
  }
  else if(i % 5 ===0) {
    $(".output").append('<li>pong</li>');
  }
  else {
    $(".output").append("<li>" + i + "</li>");
  }
}


    //front-end//
  $(document).ready(function () {
    $("form#theForm").submit(function() {
      number=$("input#numberInput").val();
      $(".output").text('');
      pingpong();
      $("input").val();
      event.preventDefault();
    });
  });
