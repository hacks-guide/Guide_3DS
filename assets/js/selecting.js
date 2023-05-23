/*
    Copyright (C) 2023 Gruetzig
    Copyright (C) 2023 Nintendo Homebrew

    SPDX-License-Identifier: MIT
*/

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
                (!model && minor == 4 && native == 33) ||
                (!model && minor == 5 && native == 34) ||
                (!model && minor == 6 && native == 35) ||
                (!model && minor == 7 && native == 35) ||
                (!model && minor == 8 && native == 35) ||
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
    if (model == 0) {
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
// EUR/JPN: 11.17 only, USA has no working otherapp on 11.17
// KOR: 11.16 only, KOR does not have 11.17
// CHN/TWN has no N3DS
function can_superskaterhax(major, minor, native, region, model) {
    let do_redirect_sysupdate = false;
    let do_redirect = false;
    // N3DS only
    if(model == 1) {
        if (major == 11) {
            if (["E", "J"].includes(region)) {
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
        window.location.href = "homebrew-launcher-(super-skaterhax)";
        return true;
    }
    return false;
}

// Seedminer, U/E/J/K region
// only 11.16 can run Seedminer
function can_seedminer(major, minor, native, region, model) {
    let do_redirect_sysupdate = false;
    let do_redirect_twn = false;
    let do_redirect = false;
    // 11.16 should always do seedminer on 3DS
    if (major == 11 && minor == 16) {
        if (["U", "E", "J", "K"].includes(region)) do_redirect = true;
        else if (region == "T") do_redirect_twn = true;
    }
    // KOR O3DS on any version should update to 11.16
    else if (model == 0 && region == "K") do_redirect_sysupdate = true;

    if (do_redirect_sysupdate) {
        window.location.href = "updating-firmware-(kor-twn)";
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

/*
    Redirects page based on input from user.
    Input:
        - System version
        - O3DS/N3DS

    General exploits are as follows:
    - 1.0 - 11.3
        - Soundhax, compatible in all regions, all models
    - 11.4 - 11.13 with matching NVer for each version:
        - SSLoth-Browser, doesn't work on cart-updated FW
    - O3DS & 11.4 - 11.14 & any cart-updated FW between said version:
        - safecerthax, compatible in all regions, O3DS only
        - This way O3DS still gets an easy way to install something if browser isn't functional
    - N3DS & 11.14 - 11.15 (EUR / JPN) 
        - Update and do 11.17 guide
    - O3DS & 11.15:
        - Not implemented in this guide
    - 11.16 (KOR is O3DS only):
        - Seedminer
    - KOR N3DS 11.16, N3DS & 11.17 (EUR / JPN):
        - super-skaterhax (currently not working on USA)
    - O3DS & 11.17:
        - Unhackable
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
        return;
    }
    else if (major.value == 0) {
        document.getElementById("result_invalidVersion").style.display = "block";
        return;
    }

    // O3DS = 0
    // N3DS = 1
    var model = 0;
    if(isN3DS) model = 1;

    let redirected = false;
    // Start validation
    redirected = can_soundhax(major.value, minor.value, nver.value, region.value, model);
    if (redirected) return true;
    redirected = can_ssloth(major.value, minor.value, nver.value, region.value, model);
    if (redirected) return true;
    redirected = can_safecerthax(major.value, minor.value, nver.value, region.value, model);
    if (redirected) return true;
    redirected = can_seedminer(major.value, minor.value, nver.value, region.value, model);
    if (redirected) return true;
    redirected = can_superskaterhax(major.value, minor.value, nver.value, region.value, model);
    if (redirected) return true;

    // if it actually got to this point, there is no exploit available.
    document.getElementById("result_methodUnavailable").style.display = "block";
    return false;
}
