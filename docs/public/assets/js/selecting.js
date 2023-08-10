/*
    Copyright (C) 2023 Gruetzig
    Copyright (C) 2023 Nintendo Homebrew

    SPDX-License-Identifier: MIT
*/

const DEVICE_N3DS = 1;
const DEVICE_O3DS = 0;

// Possible max minor for each major, major as key
const major_minor_map = {
    0: -1, // invalidate all 0.x
    1: 1,
    2: 2,
    3: 1,
    4: 5,
    5: 1,
    6: 4,
    7: 2,
    8: 1,
    9: 9,
    10: 7,
    11: 17
}

// Validate version
// CHN/TWN doesn't have new model
// KOR/CHN/TWN doesn't have 11.17 currently
function validate_version(major, minor, native, region, model) {
    if (model == DEVICE_N3DS && ["C", "T"].includes(region)) {
        return false;
    }

    if (major == 11 && minor == 17 && ["K", "C", "T"].includes(region)) {
        return false;
    }

    const minor_max = major_minor_map[major];
    if (!isNaN(minor_max) && minor > minor_max) {
        return false;
    }

    return true;
}

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
    const major = document.getElementById("major").value;
    const minor = document.getElementById("minor").value;
    const nver = document.getElementById("nver").value;
    const region = document.getElementById("region").value;
    const isN3DS = document.getElementById("new3DS").checked;
    const isO3DS = document.getElementById("old3DS").checked;
    document.getElementById("result_noneSelected").style.display = "none";
    document.getElementById("result_invalidVersion").style.display = "none";
    if ((!isN3DS) && (!isO3DS)) {
        alert(document.getElementById("result_noneSelected").innerText);
        return;
    }

    // Realistically only one of these should be possible with the given elements
    let model = -1;
    if(isO3DS) model = DEVICE_O3DS
    else if(isN3DS) model = DEVICE_N3DS;

    if (!validate_version(major, minor, nver, region, model)) {
        alert(document.getElementById("result_invalidVersion").innerText);
        return;
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
    alert(document.getElementById("result_methodUnavailable").innerText);
    return false;
}
