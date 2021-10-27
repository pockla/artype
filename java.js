//sidebar event
function profile() {
  var element = document.getElementById("triangle");
  element.classList.toggle("rotate");
  //var element = document.getElementById("profile");
  //element.classList.toggle("fold");
};

//btn event
//function btn() {
  //nav runs out
      //var element = document.getElementById("fold");
      // element.classList.toggle("unfold");
  //button scale 0
  //var element = document.getElementById("botton");
   // element.classList.toggle("btn-wipe"); 
  //};







//toggle=click

//sidebar=fold

//active=unfold




window.onload = function(){ 
//const toggle = document.getElementById('toggle');
const fold = document.getElementById('fold');
const botton = document.getElementById('botton');
const profile = document.getElementById('profile');

//const fold = document.getElementById('fold');
//const fold = document.getElementById('fold');



document.onclick = function(e){
  if(e.target.id !== 'botton'&& e.target.id !== 'btn-span' && e.target.id !== 'profile' )
  {
    //toggle.classList.remove('active');
    fold.classList.remove('unfold');
    //botton.classList.remove('btn-wipe')
    botton.classList.remove('btn-wipe');
    //triangle
    triangle.classList.remove('rotate');
    //years
    years.classList.remove('fold')
  }
}

botton.onclick = function(){
  //toggle.classList.toggle('active');
  fold.classList.toggle('unfold');
  botton.classList.toggle('btn-wipe')
}

profile.onclick = function(){
  years.classList.toggle('fold');
  triangle.classList.toggle('rotate')
  }
}




