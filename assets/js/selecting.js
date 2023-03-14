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
      document.getElementById("result_invalidVersion").style.display = "none";
		  document.getElementById("result_methodUnavailable").style.display = "none";
      if (mainver.value == 0) {
        document.getElementById("result_invalidVersion").style.display = "block";
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
          window.location.href = "seedminer-(twn)";
      }
      else if (region.value === "C") {
          document.getElementById("result_methodUnavailable").style.display = "block";
      }
      else {
          window.location.href = "seedminer";
      }
  }
