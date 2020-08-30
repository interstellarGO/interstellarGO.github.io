var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("menu-links").style.top = "25px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
    document.getElementById("menu-links").style.top = "-25px";
  }
  prevScrollpos = currentScrollPos;
};

function myPopup() {
  var x = document.getElementById("popup");
  if (x.style.display == "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
