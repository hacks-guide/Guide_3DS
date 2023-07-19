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
// 1.0-11.3, all regions, all consoles
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

// SSLoth
// U/E/J has different version table than KOR
// KOR/CHN/TWN Old 3DS browser (spider) 1.7630 (v10240, shipped with 11.1~11.8) isn't supported by browserhax
// CHN/TWN isn't validated for now as those cannot exploit atm
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
// EUR/JPN/USA: 11.16 and 11.17
// KOR: 11.16 only, KOR does not have 11.17
// CHN/TWN has no N3DS
function can_superskaterhax(major, minor, native, region, model) {
    let do_redirect_sysupdate = false;
    let do_redirect = false;
    // N3DS only
    if(model == DEVICE_N3DS) {
        if (major == 11) {
            if (["E", "J", "U"].includes(region)) {
                if (minor == 17) do_redirect = true;
                // Since this exploit works on latest,
                // if no other exploit exists for that version, update
                else do_redirect_sysupdate = true;
            }
            else if(region == "K") {
                if (minor == 16) do_redirect = true;
                // Since this exploit works on latest,
                // if no other exploit exists for that version, update
                else do_redirect_sysupdate = true;
            }
        }
    }

    if (do_redirect_sysupdate) {
        window.location.href = "updating-firmware-(new-3ds)";
        return true;
    }
    else if (do_redirect) {
        window.location.href = "installing-boot9strap-(super-skaterhax)";
        return true;
    }
    return false;
}

// Mii mining
// Only do on 11.15 O3DS (except KOR and TWN, those don't have 11.17 and can update and do seedminer)
function can_miimine(major, minor, native, region, model) {
    let do_redirect = false;

    if (model == DEVICE_O3DS) {
        if (major == 11 && minor == 15) {
            // KOR and TWN can do normal seedminer
            // CHN can't do seedminer at all (no valid exploit after doing so)
            // All other O3DS must Mii mine
            if (!["C", "K", "T"].includes(region)) do_redirect = true;
        }
    }

    if (do_redirect) {
        window.location.href = "seedminer-(mii)";
        return true;
    }
}

// Seedminer, U/E/J/K region
// only 11.16 can run Seedminer
function can_seedminer(major, minor, native, region, model) {
    let do_redirect_sysupdate_twn = false;
    let do_redirect_sysupdate_kor = false;
    let do_redirect_sysupdate = false;
    let do_redirect_twn = false;
    let do_redirect = false;
    // O3DS 11.16 should always do seedminer on 3DS
    if (major == 11 && minor == 16) {
        if (model == DEVICE_O3DS) {
            if (["U", "E", "J", "K"].includes(region)) do_redirect = true;
        else if (region == "T") do_redirect_twn = true;
    }
    // KOR on any version should update to 11.16
    else if (model == DEVICE_O3DS && region == "K") do_redirect_sysupdate_kor = true;
    else if (model == DEVICE_N3DS && region == "K") do_redirect_sysupdate = true;
    // TWN on any version should update to 11.16
    else if (region == "T") do_redirect_sysupdate_twn = true;

    if (do_redirect_sysupdate) {
        window.location.href = "updating-firmware-(new-3ds)";
        return true;
    }
    if (do_redirect_sysupdate_twn) {
        window.location.href = "updating-firmware-(twn)";
        return true;
    }
    if (do_redirect_sysupdate_kor) {
        window.location.href = "updating-firmware-(kor)";
        return true;
    }
    else if (do_redirect_twn) {
        window.location.href = "seedminer-(twn)";
        return true;
    }
    else if (do_redirect) {
        window.location.href = "seedminer";
        return true;
    }
    return false;
}

function is_o3ds_1117(major, minor, native, region, model) {
    let do_redirect = false;
    if (model == 0) {
        if (major == 11 && minor == 17) {
            // sanity check this: K/T/C does not have 11.17 (yet?)
            if (["U", "E", "J"].includes(region)) do_redirect = true;
        }
    }
    if (do_redirect) {
        window.location.href = "alternate-exploits"
        return true;
    }
    return false;
}

/*
    Redirects page based on input from user.
    Input:
        - System version
        - O3DS/N3DS

    General exploits are as follows:
    - 1.0 - 11.3
        - Soundhax, compatible in all regions, all models
    - 11.4 - 11.13 with matching NVer for each version (and some KOR quirk):
        - SSLoth-Browser, doesn't work on cart-updated FW
    - O3DS & 11.4 - 11.14 & any cart-updated FW between said version:
        - safecerthax, compatible in all regions, O3DS only
        - This way O3DS still gets an easy way to install something if browser isn't functional
    - N3DS & 11.14 - 11.15 (EUR / JPN / USA / KOR) 
        - Update and do 11.16/11.17 guide
    - O3DS & 11.15:
        - Mii mine
    - O3DS & 11.16:
        - Seedminer
    - N3DS & 11.16 - 11.17 (EUR / JPN / USA / KOR):
        - super-skaterhax
    - O3DS & 11.17:
        - Use alternate exploits; can't hack without any extra stuff
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
    document.getElementById("result_methodUnavailable").style.display = "none";
    if ((!isN3DS) && (!isO3DS)) {
        document.getElementById("result_noneSelected").style.display = "block";
        return;
    }

    // Realistically only one of these should be possible with the given elements
    let model = -1;
    if(isO3DS) model = DEVICE_O3DS
    else if(isN3DS) model = DEVICE_N3DS;

    if (!validate_version(major, minor, nver, region, model)) {
        document.getElementById("result_invalidVersion").style.display = "block";
        return;
    }

    const redirected = [
      can_soundhax,
      can_ssloth,
      can_safecerthax,
      can_miimine,
      can_superskaterhax,
      can_seedminer,
      is_o3ds_1117
    ].some(func => func(major, minor, nver, region, model));
    if (redirected) return true;

    // if it actually got to this point, there is no exploit available.
    document.getElementById("result_methodUnavailable").style.display = "block";
    return false;
}
