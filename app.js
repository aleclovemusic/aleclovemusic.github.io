function myPortfolio() {
    document.getElementById("ptfDropdown").classList.toggle("show");
}
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  $(document).ready(function (){
    $('.autoslider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    });
  });


  //burger

const burgerButton = document.getElementsByClassName("burger")[0]
const burgerLinks = document.getElementsByClassName("burgermenu")[0]

burgerButton.addEventListener('click', () => {
  burgerLinks.classList.toggle('active')
})

function burgerPtfdrop() {
    document.getElementById("burgerPtfdrop").classList.toggle("show-ptfcontent");
}

window.onclick = function(event) {
  if(!event.target.matches('.burger-ptfbutton')) {
    var ptfmenus = document.getElementsByClassName("burger-ptfdrop");
    var j;
    for (j = 0; j < ptfmenus.length; j++) {
      var openPtfmenu = ptfmenus[j];
      if (openPtfmenu.classList.contains('show-ptfcontent')) {
        openPtfmenu.classList.remove('show-ptfcontent');
      }
    }
  }
}