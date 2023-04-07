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

function sslothablekor(s, n) {
    if
        (
        (s == 4 && n == 33) ||
        (s == 5 && n == 34) ||
        (s == 6 && n == 35) ||
        (s == 7 && n == 35) ||
        (s == 8 && n == 35) ||
        (s == 9 && n == 36) ||
        (s == 10 && n == 37) ||
        (s == 12 && n == 38) ||
        (s == 13 && n == 39)
        ) {
            return true;
    }
    else {
        return false;
    }
}

function redirect() {
    var major = document.getElementById("major");
    var minor = document.getElementById("minor");
    var nver = document.getElementById("nver");
    var region = document.getElementById("region");
    var isN3DS = document.getElementById("new3DS").checked;
    var isO3DS = document.getElementById("old3DS").checked;
    document.getElementById("result_noneSelected").style.display = "none";
    document.getElementById("result_invalidVersion").style.display = "none";
    document.getElementById("result_methodUnavailable").style.display = "none";
    if ((!isN3DS) && (!isO3DS)) {
        document.getElementById("result_noneSelected").style.display = "block";
    }
    else if (major.value == 0) {
        document.getElementById("result_invalidVersion").style.display = "block";
    }
    else { //only do things if major isnt 0, which would be invalid
        if (["U", "E", "J"].includes(region.value)) { // USA/EUR/JPN things
            if (major.value < 11 || minor.value < 4) { //soundhax works on all consoles for 1.0-11.3
                window.location.href = "installing-boot9strap-(soundhax)";
            }
            else if (sslothable(minor.value, nver.value)) { //check for versions that are not cartupdated, cartupdated consoles cannot access the browser, see troubleshooting for solution
                window.location.href = "installing-boot9strap-(ssloth-browser)";
            }
            else if (minor.value < 15 && isO3DS) {
                window.location.href = "installing-boot9strap-(safecerthax)";
            }
            else if (isN3DS) {
                window.location.href = "homebrew-launcher-(super-skaterhax)"; //new browserhax for latest version
            }
            else { //seedminer does still work for the latest version on E/U/J/K/T/C, but can only be chained on E/U/J/K/T
                window.location.href = "seedminer";
            }
        }
        else if (region.value === "K") { //korea stuff
            if (major.value < 11 || minor.value < 4) { //soundhax works on all consoles for 1.0-11.3
                window.location.href = "installing-boot9strap-(soundhax)";
            }
            else if (sslothablekor(minor.value, nver.value)) { //check for versions that are not cartupdated, cartupdated consoles cannot access the browser, see troubleshooting for solution
                window.location.href = "installing-boot9strap-(ssloth-browser)";
            }
            else if (minor.value < 15 && isO3DS) {
                window.location.href = "installing-boot9strap-(safecerthax)";
            }
            else if (isN3DS) {
                window.location.href = "homebrew-launcher-(super-skaterhax)";
            }
            else { //seedminer does still work for the latest version on E/U/J/K/T/C, but can only be chained on E/U/J/K/T
                window.location.href = "seedminer";
            }
        }
        else if (region.value === "T") { //taiwan stuff
            if (major.value < 11 || minor.value < 4) { //soundhax works on all consoles for 1.0-11.3
                window.location.href = "installing-boot9strap-(soundhax)";
            }
            //else if (sslothable(minor.value, nver.value)) { //check for versions that are not cartupdated, cartupdated consoles cannot access the browser, see troubleshooting for solution
            //    window.location.href = "installing-boot9strap-(ssloth-browser)"; //OTHERAPP BROKEN FOR TWN/CHN 11.4+ ATM
            //}
            else if (minor < 15 && isO3DS) {
                window.location.href = "installing-boot9strap-(safecerthax)";
            }
            else { //seedminer does still work for the latest version on E/U/J/K/T/C, but can only be chained on E/U/J/K/T
                window.location.href = "seedminer-(twn)";
            }
        }
        else if (region.value === "C") { //chn stuff
            if (major.value < 11 || minor.value < 4) { //soundhax works on all consoles for 1.0-11.3
                window.location.href = "installing-boot9strap-(soundhax)";
            }
            //else if (sslothable(minor.value, nver.value)) { //check for versions that are not cartupdated, cartupdated consoles cannot access the browser, see troubleshooting for solution
            //    window.location.href = "installing-boot9strap-(ssloth-browser)"; //OTHERAPP BROKEN FOR TWN/CHN 11.4+ ATM
            //}
            else if (minor < 15 && isO3DS) {
                window.location.href = "installing-boot9strap-(safecerthax)";
            }
            else { //seedminer does still work for the latest version on E/U/J/K/T/C, but can only be chained on E/U/J/K/T, so CHN cannot be modded atm without additional hardware
                document.getElementById("result_methodUnavailable").style.display = "block";
            }
        }
    }
}
