
var taille  = window.prompt("Quel taille pour votre damier ?(seulement paire évidemment..)");
parseInt(taille);
var index = taille / 2;
console.log("la taille totale du damier est", taille);
var color = window.prompt("R/J(Rouge et jaune) ou N/B(Noir et blanc) ?");
console.log(color);

document.write('<div class="box"><table>')
var x = 0;
var y = 0;
if (color = "N/B"){

    while (y != index){
        document.write('<tr>');
        while(x != index) {

        document.write('<td><div id="case1"></div></td>');
        document.write('<td><div id="case2"></div></td>');
        x++;
        }
        
    x = 0;

    console.log(x);

    document.write('<tr>');
    while(x != index) {

    document.write('<td><div id="case2"></div></td>');
    document.write('<td><div id="case1"></div></td>');

    x++;
    }

    x = 0;
    y++;
    document.write('</tr>');
    console.log("Pour compter le nombre de colonnes.", y);

    }
    document.write('</table></div>')


}

if (color = "R/J"){

    while (y != index){
        document.write('<tr>');
        while(x != index) {

        document.write('<td><div id="case3"></div></td>');
        document.write('<td><div id="case4"></div></td>');
        x++;
        }
        
    x = 0;

    console.log(x);

    document.write('<tr>');
    while(x != index) {

    document.write('<td><div id="case4"></div></td>');
    document.write('<td><div id="case3"></div></td>');

    x++;
    }

    x = 0;
    y++;
    document.write('</tr>');
    console.log("Pour compter le nombre de colonnes.", y);

    }
    document.write('</table></div>')


}




