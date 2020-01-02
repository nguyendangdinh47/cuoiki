var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*-------------------------------*/

function display(itemName) {
    const itemNames = ['code', 'member', 'missions','a'];
    for (i = 0; i < itemNames.length; i++) {
        if(itemNames[i] === itemName) 
    {
        document.getElementById(`${itemNames[i]}`).style.display = 'block'
        document.getElementById(`${itemNames[i]}Button`).style.boxShadow = ' 0 0 10px 8px black'
    } else {
        document.getElementById(`${itemNames[i]}`).style.display = 'none'
        document.getElementById(`${itemNames[i]}Button`).style.boxShadow ='none'

    }
        
    }
}


function display1(item) {
    const items = ['codelong', 'codequi','codehuong','codethoai','codekien','codeminh','codedinh'];
    for (i = 0; i < item.length; i++) {
        document.getElementById(`${items[i]}`).style.display = items[i] === item ? "block" : "none";
    }
}

function display2(itemm) {
    const itemss = ['sx1', 'sx2','sx3','sx4','sx5'];
    for (i = 0; i < itemss.length; i++) {
        document.getElementById(`${itemss[i]}`).style.display = itemss[i] === itemm ? "block" : "none";
    }
}
