/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["fiorital/com/testUiTable/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
