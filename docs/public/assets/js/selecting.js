/*
    Copyright (C) 2023 Gruetzig
    Copyright (C) 2025 Nintendo Homebrew

    SPDX-License-Identifier: MIT
*/

// required as vitepress don't always fully reload page
// without putting script in its own scope will have const redefine issue
(() => {

// validate_version moved to common.js

// Soundhax
// 1.0-11.3
function can_soundhax(major, minor, native, region, model) {
    let do_redirect = false;
    if(major <= 10) do_redirect = true;
    else if(major == 11 && minor <= 3) do_redirect = true;

    if(do_redirect) {
        window.location.href = "installing-boot9strap-(soundhax)";
        return true;
    }
    return false;
}

function can_ssloth(major, minor, native, region, model) {
    let do_redirect = false;
    if(major == 11) {
        if(["U", "E", "J"].includes(region)) {
            if
                (
                (minor == 4 && native == 37) ||
                (minor == 5 && native == 38) ||
                (minor == 6 && native == 39) ||
                (minor == 7 && native == 40) ||
                (minor == 8 && native == 41) ||
                (minor == 9 && native == 42) ||
                (minor == 10 && native == 43) ||
                (minor == 11 && native == 43) ||
                (minor == 12 && native == 44) ||
                (minor == 13 && native == 45)
                ) {
                    do_redirect = true;
            }
        } else if (region == "K") {
            if
                (
                (model == DEVICE_N3DS && minor == 4 && native == 33) ||
                (model == DEVICE_N3DS && minor == 5 && native == 34) ||
                (model == DEVICE_N3DS && minor == 6 && native == 35) ||
                (model == DEVICE_N3DS && minor == 7 && native == 35) ||
                (model == DEVICE_N3DS && minor == 8 && native == 35) ||
                (minor == 9 && native == 36) ||
                (minor == 10 && native == 37) ||
                (minor == 12 && native == 38) ||
                (minor == 13 && native == 39)
                ) {
                    do_redirect = true;
            }
        }
    }

    if(do_redirect) {
        window.location.href = "installing-boot9strap-(ssloth-browser)";
        return true;
    }
    return false;
}

// safecerthax
// O3DS only, all regions
// Works on 1.0 to 11.14
// Soundhax and SSLoth should be validated before this
function can_safecerthax(major, minor, native, region, model) {
    let do_redirect = false;
    if (model == DEVICE_O3DS) {
        if (major <= 10) do_redirect = true;
        else if (major == 11 && minor <= 14) do_redirect = true;
    }

    if(do_redirect) {
        window.location.href = "installing-boot9strap-(safecerthax)";
        return true;
    }
    return false;
}

// super-skaterhax
// N3DS only
// EUR/JPN/USA: 11.15-11.17
// KOR: 11.15-11.16 only, KOR does not have 11.17
// CHN/TWN has no N3DS
function can_superskaterhax(major, minor, native, region, model) {
    let do_redirect = false;
    // N3DS only
    if(model == DEVICE_N3DS) {
        if (major == 11) {
            if (minor >= 15) do_redirect = true;
        }
    }

    if (do_redirect) {
        window.location.href = "installing-boot9strap-(super-skaterhax)";
        return true;
    }
    return false;
}

// MSET9
// 11.4-11.17
function can_mset9(major, minor, native, region, model) {

    // Exploit supports 11.4 or later
    if(major == 11 && minor >= 4) {
        window.location.href = "installing-boot9strap-(mset9)"
        return true;
    }
    return false;
}

/*
    Reality:

    Redirects page based on input from user.
    Input:
        - System version
        - O3DS/N3DS

    Exploits are compatibility-checked in the following order:

    - Soundhax
        - 1.0 - 11.3
        - All regions
        - All models
    - SSLoth-Browser
        - 11.4 - 11.13 with matching NVer for each version
        - USA, JPN, EUR, KOR
        - All models
    - safecerthax
        - 11.4 - 11.14
        - All regions
        - O3DS only
    - super-skaterhax
        - 11.15 - 11.17
        - USA / EUR / JPN / KOR
        - N3DS only
    - MSET9
        - 11.4 - 11.17
        - All regions
        - All models
*/
function redirect() {
    const prefix = document.getElementById("prefix").value;
    const major = document.getElementById("major").value;
    const minor = document.getElementById("minor").value;
    const nver = document.getElementById("nver").value;
    const region = document.getElementById("region").value;
    const isN3DS = document.getElementById("new3DS").checked;
    const isO3DS = document.getElementById("old3DS").checked;
    document.getElementById("result_noneSelected").style.display = "none";
    document.getElementById("result_invalidVersion").style.display = "none";
    if ((!isN3DS) && (!isO3DS)) {
        document.getElementById("result_noneSelected").style.display = "block";
        return;
    }

    // Realistically only one of these should be possible with the given elements
    let model = -1;
    if(isO3DS) model = DEVICE_O3DS
    else if(isN3DS) model = DEVICE_N3DS;

    if (prefix == '' || !validate_version(major, minor, nver, region, model)) {
        document.getElementById("result_invalidVersion").style.display = "block";
        return;
    }

    // Store selected version for some later pages
    sessionStorage.setItem("selected_version", JSON.stringify({major, minor, nver, region, model}));

    if(prefix != "Ver.") {
        document.getElementById("result_cfwPrefixDetected").style.display = "block";
        return true;
    }

    const redirected = [
      can_soundhax,
      can_ssloth,
      can_safecerthax,
      can_superskaterhax,
      can_mset9
    ].some(func => func(major, minor, nver, region, model));
    if (redirected) return true;

    // if it actually got to this point, there is no exploit available.
    document.getElementById("result_methodUnavailable").style.display = "block";
    return false;
}

window.redirect = redirect;

})();
