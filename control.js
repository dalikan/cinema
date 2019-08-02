
// Get the modal
var modal = document.getElementById("myModal");

var trailer = document.getElementsByClassName("trailer");
console.log (trailer[1].getElementsByTagName("span")[0].innerHTML);
// Get the button that opens the modal
for (var i=0;i<trailer.length;i++){
    trailer[i].addEventListener("click",function() {
        modal.style.display = "block";
        (document).getElementById("vid-dynamic").setAttribute("src",this.getElementsByTagName("span")[0].innerHTML);
      })
    
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

