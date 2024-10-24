/*
    Copyright (C) 2024 DannyAAM

    SPDX-License-Identifier: MIT
*/

(() => {

const BASE = "https://hacksguidewiki.sfo3.digitaloceanspaces.com/hacksguidewiki/Super-skaterhax";

window.MATCH = "skater.nintendohomebrew.com";

window.generateLink = (major, minor, nver, region, model, link) => {
    const fileRegion = FILENAME_REGION_MAP[region];

    if (model != DEVICE_N3DS || major < 11) {
        return null;
    }

    let fileVersion;
    switch (region) {
        case "U":
            if (minor == 17) {
                fileVersion = "v11.17";
            } else {
                fileVersion = "pre17";
            }
            break;
        case "K":
            if (minor == 17) {
                return null;
            } else {
                fileVersion = "pre17";
            }
            break;
        default:
            fileVersion = "all";
            break;
    }
    return `${BASE}-${fileRegion}-${fileVersion}.zip`;
}

})();
