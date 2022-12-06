function vajutus() {
    var x = document.getElementById("nav");
    if (x.className === "class") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }