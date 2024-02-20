
// Functions for navigation header dropdowns
function portfolioMenu() {
    document.getElementById("ptfDropdown").classList.toggle("show");
}
function aboutMenu() {
  document.getElementById("aboutDropdown").classList.toggle("show");
}
function projectsMenu() {
  document.getElementById("projectsDropdown").classList.toggle("show");
}
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementById("portfolioDropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementById("aboutDropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementById("projectsDropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // portfolio menu removal upon clicking the button again
  const portfolioButton = document.getElementById("dropdownPortfolioButton")
  const portfolioDropdown = document.getElementById("ptfDropdown")
  document.addEventListener('click', (e) => {
  
    if (!e.target.closest('#dropdownPortfolioButton')) portfolioDropdown.classList.remove('show')
   
    if (!portfolioButton.contains(e.target)) portfolioDropdown.classList.remove('show')
   })
  // about menu removal upon clicking the button again
   const aboutButton = document.getElementById("dropdownAboutButton")
   const aboutDropdown = document.getElementById("aboutDropdown")
   document.addEventListener('click', (e) => {
   
     if (!e.target.closest('#dropdownAboutButton')) aboutDropdown.classList.remove('show')
    
     if (!aboutButton.contains(e.target)) aboutDropdown.classList.remove('show')
    })
  // projects menu removal upon clicking the button again
  const projectsButton = document.getElementById("dropdownProjectsButton")
  const projectsDropdown = document.getElementById("projectsDropdown")
  document.addEventListener('click', (e) => {
  
    if (!e.target.closest('#dropdownProjectsButton')) projectsDropdown.classList.remove('show')
   
    if (!projectsButton.contains(e.target)) projectsDropdown.classList.remove('show')
   })

  $(document).ready(function (){
    $('.autoslider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    });
  });


// burger animation to and from X
function toggleBurgerAnimation() {
  var burger = document.querySelector('.burger');
  burger.classList.toggle('change');
}

// toggle burger overlay

const burgerButton = document.getElementsByClassName("burger")[0]
const burgerLinks = document.getElementsByClassName("burgermenu")[0]

burgerButton.addEventListener('click', () => {
  burgerLinks.classList.toggle('showburger')
})

  // Check screen width and close overlay if it exceeds 600px
  function checkScreenWidth() {

    if (window.innerWidth > 600 && burgerLinks.classList.contains('showburger')) {
      burgerLinks.classList.remove('showburger');

    const burger = document.getElementById('burgerIcon')
    if (window.innerWidth > 600 && burger.classList.contains('change')) {
      burger.classList.remove('change')
    }
  }
  }

  // Add event listener for window resize
  window.addEventListener('resize', checkScreenWidth);

  // Initial check on page load
  checkScreenWidth();


window.onclick = function(event) {
  // Toggle show-ptfcontent
  if (event.target.matches('.burger-ptfbutton')) {
    document.getElementById("burgerPtfdrop").classList.toggle("show-ptfcontent");
  } else {
    // Close show-ptfcontent if clicked outside
    var ptfmenus = document.getElementsByClassName("burger-ptfdrop");
    for (var j = 0; j < ptfmenus.length; j++) {
      var openPtfmenu = ptfmenus[j];
      if (openPtfmenu.classList.contains('show-ptfcontent')) {
        openPtfmenu.classList.remove('show-ptfcontent');
      }
    }
  }

  // Toggle show-aboutcontent
  if (event.target.matches('.burger-aboutbutton')) {
    document.getElementById("burgerAboutdrop").classList.toggle("show-aboutcontent");
  } else {
    // Close show-aboutcontent if clicked outside
    var aboutmenus = document.getElementsByClassName("burger-aboutdrop");
    for (var k = 0; k < aboutmenus.length; k++) {
      var openAboutmenu = aboutmenus[k];
      if (openAboutmenu.classList.contains('show-aboutcontent')) {
        openAboutmenu.classList.remove('show-aboutcontent');
      }
    }
  }

    // Toggle show-projectcontent
    if (event.target.matches('.burger-projectsbutton')) {
      document.getElementById("burgerProjectsdrop").classList.toggle("show-projectscontent");
    } else {
      // Close show-aboutcontent if clicked outside
      var projectsmenus = document.getElementsByClassName("burger-projectsdrop");
      for (var k = 0; k < projectsmenus.length; k++) {
        var openProjectsmenu = aboutmenus[k];
        if (openProjectsmenu.classList.contains('show-projectscontent')) {
          openProjectsmenu.classList.remove('show-projectscontent');
        }
      }
    }
}







// toggle highlights

function toggleHighlight(highlightId) {
  const highlightDisplay = document.getElementById(highlightId);

  if (highlightDisplay) {
    // Check if the selected player is currently hidden
    const isHidden = highlightDisplay.classList.contains('hidden');
    console.log('highlightDisplay:', highlightDisplay);
    console.log('isHidden:', isHidden);

    // Hide all
    hideAllHighlightDisplays();

    // Toggle the 'hidden' class for the selected player
    highlightDisplay.classList.toggle('hidden', !isHidden);

      // Trigger the animation by setting max-height
      if (!isHidden) {
        highlightDisplay.style.maxHeight = '0';
      } else {
        highlightDisplay.style.maxHeight = highlightDisplay.scrollHeight + 'px';
      }
  } else {
    console.error(`Highlight with ID '${highlightId}' not found.`);
  }
}

function hideAllHighlightDisplays() {
  const highlightDisplays = document.querySelectorAll('.display-highlight');
  highlightDisplays.forEach(highlight => {
    highlight.classList.add('hidden');
  });
}

// Call hideAllMusicPlayers to initially hide all players
hideAllHighlightDisplays();


// band & orchestra page 

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("psylocybin-slides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }

//Blog page




