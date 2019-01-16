// ==UserScript==
// @name       BGA Shortcuts
// @namespace  BGA Shortcuts
// @version    0.1.0
// @description  Keyboard shortcuts for the Atlas
// @include     http://*.boardgameatlas.*/*
// @include     http://boardgameatlas.*/*
// @include     https://*.boardgameatlas.*/*
// @include     https://boardgameatlas.*/*
// @copyright  2019+, JB McMichael
// ==/UserScript==

/*
 * CHANGLOG::
 * ============================================
 * 0.1.0 - First version
 */

(function () {
    "use strict";
    console.log('Loaded BGA Shortcuts');

    /**
     * If we are on the edit page, do some things
     */
    if (window.location.search.search(/search\/game\/[a-zA-Z0-9]+\/edit$/)) {
        makeLabelsClickable();
    }

    /** Functions **/

    /**
     * Add IDs to the checkboxes, and then set the label's FOR attribute to allow clicking on the labels
     * to click the checkbox
     */
    function makeLabelsClickable() {
        let labels = document.querySelectorAll('.form-inline label');
        labels.forEach((label) => {
            let node = label.previousSibling;

            if (node !== null && node.matches('[type="checkbox"]')) {
                if (node.getAttribute('id') === null) {
                    node.setAttribute('id', node.value);
                    label.setAttribute('for', node.name);
                }
            }
        });
    }
};
()
)
;
