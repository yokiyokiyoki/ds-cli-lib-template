(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.MyLib = factory());
}(this, function () { 'use strict';

  const myLib = (text) => {
      return text;
  };

  return myLib;

}));
