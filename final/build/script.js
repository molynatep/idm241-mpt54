
  window.addEventListener("DOMContentLoaded", function(e) {

   var stage = document.getElementById("stage");
   var fadeComplete = function(e) { stage.appendChild(arr[0]); };
   var arr = stage.getElementsByTagName("a");
   for(var i=0; i < arr.length; i++) {
     arr[i].addEventListener("animationend", fadeComplete, false);
   }
   
  }, false);

  //addEventListener on mouse click for opening modal on clas btn-modal
document.addEventListener('click', function (e) {
 
 //check is the right element clicked
 if (!e.target.matches('.btn-modal')) return;
 else{

    //select right modal from id-data
    var modal = document.querySelectorAll('#'+e.target.dataset.id);
    Array.prototype.forEach.call(modal, function (el) {

         //add active class on modal
         el.classList.add('active');
    });
 }
});


//addEventListener on mouse click for closing modal on modal dark background
document.addEventListener('click', function (e) {

 //check is the right element clicked
 if (!e.target.matches('.modal')) return;
 else{

     // if modal have do-not-close class it will not close it self on background click
     if (e.target.classList.contains('do-not-close')) return;
     else{

         //remove active class on modal
         e.target.classList.remove('active');
     }      
 }
});

//addEventListener on mouse click for closing modal on custom button
document.addEventListener('click', function (e) {

 //check is the right element clicked
 if (!e.target.matches('.close-modal')) return;
 else{

    //select right modal from id-data
    var modal = document.querySelectorAll('#'+e.target.dataset.id);
    Array.prototype.forEach.call(modal, function (el) {

         //remove active class on modal
         el.classList.remove('active');
    });
 }
});

//addEventListener on mouse click for standard closing modal on right top "x"
document.addEventListener('click', function (e) {

 //check is the right element clicked
 if (!e.target.matches('.m-close')) return;
 else{
    //remove active class on modal
    e.target.parentElement.parentElement.classList.remove('active');
 }
});

//CHANGING IMAGES

var controlsContainer = document.getElementById('controls-container'),
    allImages = document.querySelectorAll('.image'),
    imagesContainer = document.getElementById('images-container');


controlsContainer.onclick = function(e){
  var target = e.target,
      dataTarget = target.getAttribute('data-image'),      
      activeImage = document.getElementById(dataTarget);
  
  if(dataTarget){
    for( var i = 0; i < allImages.length; i++){
    allImages[i].removeAttribute('data-active');
  }
 
  activeImage.setAttribute('data-active', 'active');
  }  
}


//PHOTOS AND REVIEW
document.getElementById('wrapper').onclick = function() {

   var className = ' ' + wrapper.className + ' ';

   this.className = ~className.indexOf(' active ') ?
                        className.replace(' active ', ' ') :
                        this.className + ' active';
};

document.getElementById('wrapper2').onclick = function() {

   var className = ' ' + wrapper2.className + ' ';

   this.className = ~className.indexOf(' active ') ?
                        className.replace(' active ', ' ') :
                        this.className + ' active';
}