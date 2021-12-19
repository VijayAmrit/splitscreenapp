/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"za/co/spar/products/detail/splitscreenapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});