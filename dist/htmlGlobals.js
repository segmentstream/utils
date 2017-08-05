"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  getDocument: function getDocument() {
    return window.document;
  },

  getLocation: function getLocation() {
    return window.location;
  },

  getNavigator: function getNavigator() {
    return window.navigator;
  }
};