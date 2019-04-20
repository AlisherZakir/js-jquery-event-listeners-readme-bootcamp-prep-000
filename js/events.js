//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("hey!");
  });
}
function frameIt() {
  $("img").on("load", function() {
    $("img").addClass("tasty");
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    // 'g' corresponds to 71
    if (e.which === 102) {
      alert("You pressed 'g'!")
    }
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
pressIt();
});
