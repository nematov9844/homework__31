let header = document.querySelector(".header");

function baar(){
    let element = document.querySelector(".header__list");
    element.classList.toggle("toggle");
}


window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("header__shrink");
    } else {
      header.classList.remove("header__shrink");
    }
  });

  function showTime() {
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 

    if (h == 0) {
      h = 24;
    }

    if (h >= 24) {
      h = h - 24;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + " : " + m + " : " + s ;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);
  }

  showTime();