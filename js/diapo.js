$(function() {
    var i = 0;
    affiche();
  
    function affiche() {
      i++;
      if (i == 1) precedent = '#img6'
      else precedent = '#img' + (i - 1);
      var actuel = '#img' + i;
      $(precedent).fadeOut(2000);
      $(actuel).fadeIn(2000);
      if (i == 6) i = 0;
    }
  
    setInterval(affiche, 4000);
  });