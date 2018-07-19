window.onload=function(){

  // Set the page state on load
  document.documentElement.setAttribute("data-state","loaded");

  // If the browser doesn not support CSS Grid, show a warning message
  var a=CSS.supports("display:grid");

  if(!a){
    var b=document.createElement("div");
    b.innerHTML='It looks like your browser doesn\'t support the latest features used on this website. Please consider <a href="https://www.google.com/chrome/">upgrading your browser</a> for the best experience.';
    document.body.appendChild(b)
  }

};
