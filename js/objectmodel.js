var elementosp = document.getElementsByTagName("p");
//var segundoparrado = document.getElementsById("2");
//crear elemento
var elemento = document.createElement("h2");
//crear un nodo de texto
var contenido = document.createTextNode("alavrga me vale vrgaaa perrooo, y jalate hijuetuputaavrgaamevalevrgaaalavrgaa");
//añadir el nodo de texto al elemento
elemento.appendChild(contenido);
//agrega atributos al emento
elemento.setAttribute("align", "center");
//agregar el elemento al documento
document.getElementById("subtitulo").appendChild(elemento);
//si lo quisieramos agregar al final del body
//document.body.appendChild(elemento);
