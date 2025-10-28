/*global QUnit*/

sap.ui.define([
	"group3activity/controller/Group3view.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Group3view Controller");

	QUnit.test("I should test the Group3view controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
