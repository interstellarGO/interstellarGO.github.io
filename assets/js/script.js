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

function myPopup(parameter = 0) {
  var x = document.getElementById("popup");
  if (parameter == 1) {
    document.getElementById("judul-text").innerHTML = " Go-Jack";
    document.getElementById("deskripsi-text").innerHTML =
      "Sebuah aplikasi yang kami buat dengan kerjasama Go-Jack sehingga kami bisa merealisasikan impian serta idealisme mereka.";
  } else {
    document.getElementById("judul-text").innerHTML = "Contoh Judul";
  }
  if (x.style.display == "none") {
    x.style.display = "flex";
    x.style.visibility = "visible";
  } else {
    x.style.display = "none";
    x.style.visibility = "hidden";
  }
}
