function navFunction() {
  var nav = document.getElementById("navbarid");
  if (nav.className === "navbar"){
    nav.className += " respond";
  }
  else {
    nav.className = 'navbar';
  }
}

var accord = document.getElementsByClassName("accordion");
var x;

for (x = 0; x < accord.length; x++) {
  accord[x].addEventListener("click", function() {
    this.classList.toggle("active");
    var text = this.nextElementSibling;
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
  });
}

window.onscroll = function() {myFunction()};

var nav = document.getElementById("navbarid");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var button = document.getElementById("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
button.onclick = function() {
  modal.style.display = "block";
}

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
