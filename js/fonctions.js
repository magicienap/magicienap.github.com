function fn_poly_2_gen(a, b, c) {
  var x1, x2;
  var discriminant = b*b - 4 * a * c;
  
  if(discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  } else if(discriminant == 0) {
    x1 = x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
  } else {
    x1 = x2 = null;
  }
  
  return [x1, x2];
}

// Initialisation de la page
var champs_fn_poly_2_gen = {
    a: $("#fn_poly_2_gen_a"),
    b: $("#fn_poly_2_gen_b"),
    c: $("#fn_poly_2_gen_c")
  };
var resultat_fn_poly_2_gen = $("#resultat_fn_poly_2_gen");
  
// Événements
function calculer_fn_poly_2_gen() {
  var texte = "";
  if(champs_fn_poly_2_gen.a.val() != "" && champs_fn_poly_2_gen.b.val() != "" && champs_fn_poly_2_gen.c.val() != "") {
    var resultat = fn_poly_2_gen(champs_fn_poly_2_gen.a.val(), champs_fn_poly_2_gen.b.val(), champs_fn_poly_2_gen.c.val());
    if(resultat[0] == null) {
      texte = "Il n'y a pas de solution!";
    } else {
      texte = "x1 = " + resultat[0] + " et x2 = " + resultat[1]; // Arrondir à 2 chiffres et remplacer les points par des virgules.
    }
  } else {
    resultat_fn_poly_2_gen.text(resultat);
  }
  resultat_fn_poly_2_gen.text(texte);
}

_(champs_fn_poly_2_gen).forEach(function(champ) {
  champ.on("change", calculer_fn_poly_2_gen);
});
