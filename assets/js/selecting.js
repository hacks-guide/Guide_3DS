function sslothable(s, n) {
    if  
        (
        (s == 4 && n == 37) ||
        (s == 5 && n == 38) ||
        (s == 6 && n == 39) ||
        (s == 7 && n == 40) ||
        (s == 8 && n == 41) ||
        (s == 9 && n == 42) ||
        (s == 10 && n == 43) ||
        (s == 11 && n == 43) ||
        (s == 12 && n == 44) ||
        (s == 13 && n == 45)
        ) {
            return true;
    }
    else {
        return false;
    }
  
  }
  function redirect() {
      var cfw = document.getElementById("mySelecti");
      var mainver = document.getElementById("mySelect");
      var smallver = document.getElementById("mySelec");
      var nver = document.getElementById("mySel");
      var region = document.getElementById("mySe");
      if (mainver.value == 0) {
        document.getElementById("result").innerText = "Ver. 0.0.0-0 indicates a developer unit. This guide only works with retail units.";
      }
      else if (cfw.value === "other") {
          window.location.href = "checking-for-cfw";
      }
      else if (mainver.value < 11 || smallver.value < 4) {
          window.location.href = "installing-boot9strap-(soundhax)";
      }
      else if (nver.value < 36 && smallver.value < 16) {
          window.location.href = "installing-boot9strap-(soundhax-sp)";
      }
      else if (sslothable(smallver.value, nver.value)) {
          window.location.href = "installing-boot9strap-(ssloth-browser)";
      }
      else if (region.value === "T") {
          window.location.href = "seedminer(twn)";
      }
      else if (region.value === "C") {
          document.getElementById("result").innerText = "You currently cannot hack your 3DS on this version using the main methods. If you want to hack your console, you have to use ntrboot.";
      }
      else {
          window.location.href = "seedminer";
      }
  }