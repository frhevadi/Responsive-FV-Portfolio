/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myMenu() {
  document.getElementById("menu-icon").classList.toggle("change");
  document.getElementById("show-nav").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown') && !event.target.matches('.change')) {
    var dropdowns = document.getElementsByClassName("navbar-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// sticks nav bar to top

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
