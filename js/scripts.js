$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var age = $("select#age").val();
    var gender = $("select#gender").val();
    var lifestyle = $("select#lifestyle").val();
    $('.celeb').hide();
    if (gender === 'male' && age === 'senior' && lifestyle === 'wildchild') {
      $('#donaldTrump').show();
    } else if (gender === 'male' && age === 'senior' && lifestyle === 'nihilistic') {
      $('#morganFreeman').show();
    }  else if (gender === 'male' && age === 'adult' && lifestyle === 'wildchild') {
      $('#joaquinPhoenix').show();
    }  else if (gender ==='male' && age === 'adult' && lifestyle === 'nihilistic') {
      $('#kanyeWest').show();
    }  else if (gender === 'female' && age === 'senior' && lifestyle === 'wildchild') {
      $('#merylStreep').show();
    }  else if (gender === 'female' && age === 'senior' && lifestyle === 'nihilistic') {
      $('#judiDench').show();
    }  else if (gender === 'female' && age === 'adult' && lifestyle === 'wildchild') {
      $('#selenaGomez').show();
    }  else {
      $('#kristenStewart').show();
    }
    event.preventDefault();
  });
});
