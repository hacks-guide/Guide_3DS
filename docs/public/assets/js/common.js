/*
    Copyright (C) 2024 Nintendo Homebrew

    SPDX-License-Identifier: MIT
*/

(() => {

// probably not really needed?
function c(key, value) {
    Object.defineProperty(window, key, { value, writable: false, enumerable: true, configurable: false });
}

if (!window.COMMON_LOADED) {
    c("COMMON_LOADED", true);

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
    c("validate_version", (major, minor, native, region, model) => {
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
    });

    c("DEVICE_N3DS", 1);
    c("DEVICE_O3DS", 0);

    c("FILENAME_REGION_MAP", {
        "U": "usa",
        "E": "eur",
        "J": "jpn",
        "K": "kor",
        "C": "cnh",
        "T": "twn",
    });
}

})();
