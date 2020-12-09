window.onload = function () {
    var p = 0;
    document.getElementById("btn-right").addEventListener("click", function () {
      p = p + 100;
      document.getElementById("box").style.left = p + "px";
    });
  
    document.getElementById("btn-left").addEventListener("click", function () {
      p = p - 100;
      document.getElementById("box").style.left = p + "px";
    });
  };