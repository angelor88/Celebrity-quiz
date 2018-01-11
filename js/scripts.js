$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var age = $("select#age").val();
    var gender = $("select#gender").val();
    var lifestyle = $("select#lifestyle").val();
    if (gender === 'male' && age === 'senior' && lifestyle === 'wildchild') {
      $('#donaldTrump').show();
    // } else if (gender === 'male' && age === 'senior' && lifestyle === 'nihilistic') {
    //     $('#morganFreeman').show;
    // }  else if (gender === 'male' && age === 'adult' && lifestyle === 'wildchild') {
    //     $
    // }  else if (gender ===  && age ===  && lifestyle === ) {
    // }  else if (gender ===  && age ===  && lifestyle === ) {
    // }  else if (gender ===  && age ===  && lifestyle === ) {
    } else {
    }
    event.preventDefault();
  });
});
