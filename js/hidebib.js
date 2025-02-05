// function setActive(i) {
//   $(document).ready.getElementById(i).addClass("active");
// }


function hideallbibs() {
  var el = document.getElementsByClassName("bib");
  for (var i = 0; i < el.length; ++i) {
    el[i].style.display = "none";
  }
}

function togglebib(paperid) {
  var paper = document.getElementById(paperid);
  var bib = paper.getElementsByTagName("p");
  if (bib.length > 0) {
    if (bib[0].style.display == "none") {
      bib[0].style.display = "block";
    } else {
      bib[0].style.display = "none";
    }
  }
}
