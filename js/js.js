

var slideIndex = 1;
showDivs(slideIndex);   //starts on image(1)

function plusDivs(n) {
  showDivs(slideIndex += n);   //moves +1 or -1 on images... left or right
}

function currentDiv(n) {      //show image of circle selected e.g image(3)
  showDivs(slideIndex = n);
}


function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var circles = document.getElementsByClassName("circleNav");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
     
  for (i = 0; i < circles.length; i++) {
     circles[i].className = circles[i].className.replace(" bgWhite", "");
  }
    
  slides[slideIndex-1].style.display = "block";
    
  circles[slideIndex-1].className += " bgWhite";
}






