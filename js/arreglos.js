
var amigos = ["carlos", "juanito", "adan", "david", "lukapo"];
var amigos2 = ["shuffle","israel","fernando"]
var amigos3 = amigos.concat(amigos2);
document.write("tienes: "+amigos.length+" amigos<p></p>");
amigos.push("pedrito","adrian","lever");
document.write("tienes: "+amigos.length+"amigos<p></p>");
amigos.pop();
document.write("tienes: "+amigos.length+" amigos<p></p>");
document.write(amigos3.join("-"))+"<p></p>";
