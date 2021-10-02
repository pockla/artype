//sidebar event
function myFunction() {
  var element = document.getElementById("profile");
  element.classList.toggle("unfold");
  var element = document.getElementById("triangle");
  element.classList.toggle("rotate");

};

//btn event
function btn() {
  var element = document.getElementById("click");
  element.classList.toggle("btn-click");
  var element = document.getElementById("unfold");
  element.classList.toggle("unfold");
  var element = document.getElementById("click");
  element.classList.toggle("btn-wipe");
  bar.onclick=function(){
    sidebar.classList.remove('unfold')
  };




















