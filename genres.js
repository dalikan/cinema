
setInterval(function(){
    if (document.getElementById("rou").innerHTML == " Action ")
    {document.getElementById("rou").innerHTML = " Comedy "}
    else if (document.getElementById("rou").innerHTML == " Comedy ")
    {document.getElementById("rou").innerHTML = " Romance "} 
    else if (document.getElementById("rou").innerHTML == " Romance ")
    {document.getElementById("rou").innerHTML = "Classics"} 
    else if (document.getElementById("rou").innerHTML == "Classics")
    {document.getElementById("rou").innerHTML = "Superhero movies"} 
    else if (document.getElementById("rou").innerHTML == "Superhero movies")
    {document.getElementById("rou").innerHTML = "Animations"} 
    else if (document.getElementById("rou").innerHTML == "Animations")
    {document.getElementById("rou").innerHTML = " Action "} 
    },3000);
