/*
    Copyright (C) 2024 DannyAAM

    SPDX-License-Identifier: MIT
*/

(() => {

const selectedVersion = sessionStorage.getItem("selected_version");
if (selectedVersion && window.MATCH && window.generateLink) {
    function replaceLink() {
        const {major, minor, nver, region, model} = JSON.parse(selectedVersion);
        if (!validate_version(major, minor, nver, region, model)) {
            return;
        }

        const links = document.querySelectorAll(`a[href*="${MATCH}"]`);
        for(const link of links) {
            const newLink = generateLink(major, minor, nver, region, model, link.href);
            if (newLink) {
                link.setAttribute("href", newLink);
            }
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", replaceLink);
    } else {
        replaceLink();
    }

    if (!window.autoLinkAddedCustomEvent) {
        window.autoLinkAddedCustomEvent = true;
        document.addEventListener("customEventReplaceLink", replaceLink);
    }
}

})();
