
var forCounts = [];
function praxy(termina){
  for(var index = 1; index <=termina; index++)
        if (index % 15 === 0){
    forCounts.push("ping pong");
  }else if (index % 5 ===0){
    forCounts.push("pong");
  }else if (index % 3 ===0){
    forCounts.push("ping");
  }else{
    forCounts.push(index);
  }
}


$(document).ready(function(){
  $("#theForm").click(function(){
    var termina = parseInt($("#numberInput").val());
    praxy(termina);
    forCounts.forEach(function(termina){
      $("#results").append("<li>"+termina+"</li>");
    });
  });
});
