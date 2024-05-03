document.querySelectorAll(".principal button.css").forEach(function(button) {
    button.addEventListener("click", function() {
      var textoDiv = document.getElementById("texto");
  
      // Verifica si el texto está visible o no
      if (textoDiv.style.display === "block") {
        // Si está visible, lo oculta
        textoDiv.style.display = "none";
      } else {
        // Si no está visible, lo muestra
        textoDiv.style.display = "block";
      }
    });
  });

  document.querySelectorAll(".principal button.html").forEach(function(button) {
    button.addEventListener("click", function() {
      var textoDiv = document.getElementById("texto2");
  
      // Verifica si el texto está visible o no
      if (textoDiv.style.display === "block") {
        // Si está visible, lo oculta
        textoDiv.style.display = "none";
      } else {
        // Si no está visible, lo muestra
        textoDiv.style.display = "block";
      }
    });
  });

  document.querySelectorAll(".principal button.js").forEach(function(button) {
    button.addEventListener("click", function() {
      var textoDiv = document.getElementById("video");
  
      // Verifica si el texto está visible o no
      if (textoDiv.style.display === "block") {
        // Si está visible, lo oculta
        textoDiv.style.display = "none";
      } else {
        // Si no está visible, lo muestra
        textoDiv.style.display = "block";
      }
    });
  });