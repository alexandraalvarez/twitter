window.onload = function() { /*onload es para que cargue completamente la página antes de comenzar a ejecutar JS*/
    var twittearButton = document.getElementsByClassName("twittear")[0]; /*para usarla cada vez que se presione el botón 
    twittear */
    var twitterInput = document.getElementsByClassName("thinkTwitt")[0]; /*esto es para seleccionar el contenido que 
    introduzco en el input*/
    var newTwitts = document.getElementsByClassName("timeLine")[0]; /*ésto es para el contenedor que recibirá los nuevos 
    twitters*/

    twittearButton.onclick = function() { /*onclick sirve para cuando se haga click sobre el botón twittear*/ 
        if(twitterInput.value == ""){/*si el valor ingresado en el cuadro input está vacío*/
            document.getElementById("twittear").disabled = true;
        } else {/*si hay algo escrito en el cuadro*/
            var twittersDiv = document.createElement("div"); /*para crear el div contenedor de los twitters*/
            var nameSpan = document.createElement("span");/*para crear un elemento en línea que me permita ingresar el nombre 
            del usuario que comentó*/
            var hourSpan = document.createElement("span");/*para crear un elemento en línea que me permita ingresar la hora 
            del twitter*/
            var twittParagraph = document.createElement("p");/*para crear un párrafo que tenga el contenido de texto del 
            twitter*/
            twittersDiv.appendChild(nameSpan);/*para agregar el nodo que lleva el nombre del usuario al div que contiene los 
            twitters*/
            twittersDiv.appendChild(hourSpan);/*para agregar el nodo que lleva la hora en que se publicó el twitter al div 
            que contiene los twitters*/
            twittersDiv.appendChild(twittParagraph); /*para agregar el párrafo que lleva el texto del twitter al div que 
            contiene los twitters*/
            twittersDiv.className = "twitt"/*para darle una clase al div que contiene los twitters*/
            nameSpan.textContent = "gatitafeliz";/*para agregarle contenido al span que lleva al nombre del usuario que 
            publica el twitt*/
            hourSpan.textContent = new Date();/* para agregarle la hora al span que mostrará la hora de la publicación del 
            twitt*/
            twittParagraph.textContent = twitterInput.value; /*para que el contenido del párrafo del div que lleva los 
            twitters tenga como contenido lo que el usuario ingresó*/
            newTwitts.insertBefore(twittersDiv, newTwitts.children[0]);/*para insertar los nuevos twitters justo antes del 
            último que se ingresó*/

            twitterInput.value = "";/*para que el input quede vacío luego de rescatar el contenido*/

            twitterInput.onkeyup = function () {
                twitterInput.style.height = "1px";
                twitterInput.style.height = (25+twitterInput.scrollHeight)+"px";
            }
        }
    }

            var thinkTwitt = document.getElementsByClassName("thinkTwitt")[0];/*variable que permite enfocarse en el contenido que ingresa 
            el usuario desde el primero*/
            
            thinkTwitt.onkeydown = function() {/*cuando se ingresa contenido en el textarea (thinkTwitt), se activa la función 
            al apretar una tecla*/ 
                var realCounter = document.getElementsByClassName("counter")[0]; /*contador propiamente tal*/
                var maxCharacters = 140; /*número de caracteres máximo*/
                realCounter.innerHTML = maxCharacters; /*mostrar los caracteres que faltan desde el principio*/
                var charsLeft = maxCharacters-thinkTwitt.value.length;/*variable que representa los números de caracteres que quedan*/
                realCounter.innerHTML = charsLeft;/*guarda la diferencia (número) de los caracteres máximos contra los caracteres ingresados*/    
                if (charsLeft <= 20 && charsLeft >=10) { /*si el contador está entre 20 y 10*/
                    realCounter.style.color = "#F7FE2E"; /*cambia el color a amarillo*/                  
                } else if (charsLeft <= 10 && charsLeft >= 1) { /*si el contador está entre 10 y 1*/
                    realCounter.style.color = "#FF8000"; /*cambia el color a naranjo*/        
                } else if (charsLeft <= 0 ) { /*si el contador es menor o igual a 0*/
                    document.getElementById("twittear").disabled = true;/*boton desactivado*/
                } 
            }
        } 

/*sirve darle un style para que crezca el textarea ¿o es trampa?*/

/*document.appenChild(twittersDiv); para ingresar los div de cada twitter al documento, ¿o basta con el insertBefore?

Para conseguir solo las horas a partir de un new Date()

var Xmas95 = new Date('December 25, 1995 23:15:30');
var hours = Xmas95.getHours();
console.log(hours); // 23

Para conseguir solo los minutos a partir de un new Date()
var Xmas95 = new Date('December 25, 1995 23:15:30');
var minutes = Xmas95.getMinutes();
console.log(minutes); // 15*/