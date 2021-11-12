var carouselIndex = 0;

function showSlides() {
  var i;
  var carousels = document.getElementsByClassName("carousel");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < carousels.length; i++) {
    carousels[i].style.display = "none";  
  }
  carouselIndex++;
  if (carouselIndex > carousels.length) {carouselIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  carousels[carouselIndex-1].style.display = "block";  
  dots[carouselIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}

showSlides();