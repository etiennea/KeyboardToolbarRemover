/**
 * A plugin to enable to hide the keyboard toolbar dynamically on phonegap 3.0 for ios
 *
 * Copyright (c) Etienne Adriaenssen 2013
 */

 var exec = require('cordova/exec');

 function KeyboardToolbarRemover() {}

 KeyboardToolbarRemover.prototype.show = function() {
    if(/android/i.test(navigator.userAgent))
        return;
    var fail = function (error) {
        console.log("Error enabling web form accessory toolbar" + error);
    }
    var success = function (success) {
    };

    return cordova.exec(success, fail, "KeyboardToolbarRemover", "show", []);
};

KeyboardToolbarRemover.prototype.hide = function() {
    if(/android/i.test(navigator.userAgent))
        return;
    var fail = function (error) {
        console.log("Error hiding the web form accessory toolbar" + error);
    };
    var success = function (success) {
    };

    return cordova.exec(success, fail, "KeyboardToolbarRemover", "hide", []);
};

module.exports = new KeyboardToolbarRemover();