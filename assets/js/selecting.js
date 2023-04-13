/*
    Copyright (C) 2023 Gruetzig
    Copyright (C) 2023 Nintendo Homebrew

    SPDX-License-Identifier: MIT
*/

// CVer:NVer map for U/E/J regions
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

// CVer:NVer map for KOR region
// CHN/TWN isn't validated for now as those cannot exploit atm
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

/*
    Redirects page based on input from user.
    Input:
        - System version
        - O3DS/N3DS

    General exploits are as follows:
    - 1.0 - 11.3
        - Soundhax, compatible in all regions
    - 11.4 - 11.13 with matching NVer for each version:
        - SSLoth-Browser, doesn't work on cart-updated FW
    - O3DS & 11.4 - 11.14 & any cart-updated FW between said version:
        - safecerthax, compatible in all regions, O3DS only
        - This way O3DS still gets an easy way to install something if browser isn't functional
    - 11.15 - 11.16:
        - Seedminer
        - N3DS has a somewhat better page below
    - N3DS & 11.16:
        - super-skaterhax, compatible with 11.15 - 11.16 but browser itself doesn't work on 11.15
        - This way N3DS users don't have to think too much about the slightly long Seedminer steps
*/
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
    // only do things if major isnt 0, which would be invalid
    else {
        // USA/EUR/JPN things
        if (["U", "E", "J"].includes(region.value)) {
            // soundhax works on all consoles for 1.0-11.3
            if (major.value < 11 || minor.value < 4) {
                window.location.href = "installing-boot9strap-(soundhax)";
            }
            // check for versions that are not cartupdated, cartupdated consoles cannot access the browser, see troubleshooting for solution
            else if (sslothable(minor.value, nver.value)) {
                window.location.href = "installing-boot9strap-(ssloth-browser)";
            }
            else if (minor.value < 15 && isO3DS) {
                window.location.href = "installing-boot9strap-(safecerthax)";
            }
            // new browserhax for latest version
            /*
            else if (isN3DS) {
                window.location.href = "homebrew-launcher-(super-skaterhax)";
            }
            */
            // seedminer does still work for the latest version on E/U/J/K/T/C, but can only be chained on E/U/J/K/T
            else {
                window.location.href = "seedminer";
            }
        }
        //korea stuff
        else if (region.value === "K") {
            // soundhax works on all consoles for 1.0-11.3
            if (major.value < 11 || minor.value < 4) {
                window.location.href = "installing-boot9strap-(soundhax)";
            }
            // check for versions that are not cartupdated, cartupdated consoles cannot access the browser, see troubleshooting for solution
            else if (sslothablekor(minor.value, nver.value)) {
                window.location.href = "installing-boot9strap-(ssloth-browser)";
            }
            else if (minor.value < 15 && isO3DS) {
                window.location.href = "installing-boot9strap-(safecerthax)";
            }
            // new browserhax for latest version
            /*
            else if (isN3DS) {
                window.location.href = "homebrew-launcher-(super-skaterhax)";
            }
            */
            // seedminer does still work for the latest version on E/U/J/K/T/C, but can only be chained on E/U/J/K/T
            else {
                window.location.href = "seedminer";
            }
        }
        //taiwan stuff
        else if (region.value === "T") {
            // soundhax works on all consoles for 1.0-11.3
            if (major.value < 11 || minor.value < 4) {
                window.location.href = "installing-boot9strap-(soundhax)";
            }
            // check for versions that are not cartupdated, cartupdated consoles cannot access the browser, see troubleshooting for solution
            // OTHERAPP BROKEN FOR TWN/CHN 11.4+ ATM
            /*
            else if (sslothable(minor.value, nver.value)) {
                window.location.href = "installing-boot9strap-(ssloth-browser)";
            }
            */
            else if (minor < 15 && isO3DS) {
                window.location.href = "installing-boot9strap-(safecerthax)";
            }
            else { //seedminer does still work for the latest version on E/U/J/K/T/C, but can only be chained on E/U/J/K/T
                window.location.href = "seedminer-(twn)";
            }
        }
        // chn stuff
        else if (region.value === "C") {
            // soundhax works on all consoles for 1.0-11.3
            if (major.value < 11 || minor.value < 4) {
                window.location.href = "installing-boot9strap-(soundhax)";
            }
            // check for versions that are not cartupdated, cartupdated consoles cannot access the browser, see troubleshooting for solution
            // OTHERAPP BROKEN FOR TWN/CHN 11.4+ ATM
            /*
            else if (sslothable(minor.value, nver.value)) {
                window.location.href = "installing-boot9strap-(ssloth-browser)";
            }
            */
            else if (minor < 15 && isO3DS) {
                window.location.href = "installing-boot9strap-(safecerthax)";
            }
            // seedminer itself works on CHN. But no exploit *chain* supports CHN
            // so at this point there is no supported method
            else {
                document.getElementById("result_methodUnavailable").style.display = "block";
            }
        }
    }
}
