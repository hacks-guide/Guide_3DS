/*
    Copyright (C) 2024 DannyAAM

    SPDX-License-Identifier: MIT
*/

(() => {

const BASE = "https://github.com/nedwill/soundhax/raw/master/soundhax";

window.MATCH = "soundhax.com";

window.generateLink = (major, minor, nver, region, model, link) => {
    const fileRegion = FILENAME_REGION_MAP[region];

    if (model == DEVICE_N3DS) {
        return `${BASE}-${fileRegion}-n3ds.m4a`;
    }

    if (model == DEVICE_O3DS) {
        if (major <= 2 && ["K", "C", "T"].includes(region)) {
            return null;
        }

        let fileVersion;
        switch (parseInt(major)) {
            case 1:
                fileVersion = "pre2.1";
                break;
            case 2:
                // 2.1 special case:
                //   - if nver lower than 4, use pre 2.1, as sound app is not updated
                //   - otherwise, use 2.1/2.2 for newer soundhax app
                if (minor == 1 && nver < 4) {
                    fileVersion = "pre2.1";
                } else {
                    fileVersion = "v2.1and2.2";
                }
                break;
            case 3:
            case 4:
                fileVersion = "v3.xand4.x";
                break;
            default: // 5.x and later... maybe reject past 11.3?
                fileVersion = "post5.0";
                break;
        }
        return `${BASE}-${fileRegion}-o3ds-${fileVersion}.m4a`;
    }

    return null; // wtf?
}

})();
