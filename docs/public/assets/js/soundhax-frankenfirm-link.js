/*
    Copyright (C) 2024 DannyAAM

    SPDX-License-Identifier: MIT
*/

(() => {

const BASE = "https://github.com/danny8376/soundhax/raw/frankenfirmware/soundhax";

window.MATCH = "soundhax.686178.xyz/frankenfirm";

// adopt from https://github.com/danny8376/soundhax/blob/2a2c2499ad45d9216ae4c9d157dfb90dfd3b6bd4/docs/js/frankenfirm.js#L82-L237
window.generateLink = (major, minor, nver, region, model, link) => {
    console.log("MATCH")
    const fileRegion = FILENAME_REGION_MAP[region];
    const errorIndex = link.lastIndexOf("?");
    if (errorIndex == -1) {
        return null;
    }
    const error = link.slice(errorIndex + 1);
    console.log(error);

    if (model == DEVICE_N3DS || ["K", "C", "T"].includes(region)) {
        return null;
    }

    switch (parseInt(nver)) {
        case 0:
        case 1:
        case 2:
        case 3:
            console.log("nver 0-3")
            if (major < 2 || (major == 2 && minor <= 1)) {
                switch (error) {
                    case "unplayable":
                        // very unlikely to have v1027 sound app in this case?
                        return `${BASE}-${fileRegion}-o3ds-pre2.1.m4a`;
                    case "crash":
                        return null; // WTF
                    default:
                        return null;
                }
            } else if (major < 5) {
                switch (error) {
                    case "unplayable":
                        return `${BASE}-${fileRegion}-o3ds-pre2.1.m4a`;
                    case "crash":
                        return `${BASE}-${fileRegion}-o3ds-v2.1and2.2.m4a`;
                    default:
                        return null;
                }
            } else if (major < 11 || (major == 11 && minor <= 3)) {
                switch (error) {
                    case "unplayable":
                        return `${BASE}-${fileRegion}-o3ds-pre2.1-post5franken.m4a`;
                    case "crash":
                        return `${BASE}-${fileRegion}-o3ds-v2.1and2.2-post5franken.m4a`;
                    default:
                        return null;
                }
            } else if ((major == 11 && minor > 3) || major > 11) {
                    return null;
            }
        case 4:
            console.log("nver 4")
            if (major < 2 || (major == 2 && minor < 1)) {
                return null; // WTF
            } else if (major == 2 && minor == 1) {
                switch (error) {
                    case "unplayable":
                        return `${BASE}-${fileRegion}-o3ds-v2.1and2.2.m4a`;
                    case "crash":
                        return null; // WTF
                    default:
                        return null;
                }
            } else if (major < 5) {
                switch (error) {
                    case "unplayable":
                        return null;
                    case "crash":
                        return `${BASE}-${fileRegion}-o3ds-v2.1and2.2.m4a`;
                    default:
                        return null;
                }
            } else if (major < 11 || (major == 11 && minor <= 3)) {
                switch (error) {
                    case "unplayable":
                        return null;
                    case "crash":
                        return `${BASE}-${fileRegion}-o3ds-v2.1and2.2-post5franken.m4a`;
                    default:
                        return null;
                }
            } else if ((major == 11 && minor > 3) || major > 11) {
                    return null;
            }
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            console.log("nver 5-10");
            if (major < 5) {
                switch (error) {
                    case "unplayable":
                    case "crash":
                        return null;
                    default:
                        return null;
                }
            } else if (major < 11 || (major == 11 && minor <= 3)) {
                switch (error) {
                    case "unplayable":
                    case "crash":
                        return null;
                    default:
                        return null;
                }
            } else if ((major == 11 && minor > 3) || major > 11) {
                    return null;
            }
        default:
            if (nver < 37) {
                console.log("nver 11-36");
                switch (error) {
                    case "unplayable":
                    case "crash":
                        return null;
                    default:
                        return `${BASE}-${fileRegion}-o3ds-post5.0.m4a`;
                }
            } else {
                console.log("nver 37+");
                return null;
            }
    }
}

// workaround for link-common.js won't get loaded again if jump from other also loaded page
document.dispatchEvent(new Event("customEventReplaceLink"));

})();
