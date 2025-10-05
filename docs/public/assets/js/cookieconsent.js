window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "theme": "classic",
  "position": "bottom-right",
  "content": {
    "message": document.getElementById("cookieconsent_i18n").getAttribute("content")
  }
})});
