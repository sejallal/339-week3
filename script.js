function navFunction() {
  var nav = document.getElementById("navbarid");
  if (nav.className === "navbar"){
    nav.className += " respond";
  }
  else {
    nav.className = 'navbar';
  }
}
