var counter = 1;
setInterval(function(){
    document.getElementById('rd' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter=1
    }
}, 3000);
