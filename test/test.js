/* global describe, it, expect, pending */

var cuid = require('../');

// browser check function adapted from is-in-browser module
var isInBrowser = typeof window === 'object' &&
  typeof document === 'object' &&
  document.nodeType === 9;

var MAX = 1200000;

function collisionTest (fn) {
  var i = 0;
  var ids = {};
  var pass = true;

  while (i < MAX) {
    var id = fn();

    if (!ids[id]) {
      ids[id] = id;
    } else {
      pass = false;
      console.log('Failed at ' + i + ' iterations.');
      break;
    }

    i++;
  }

  return pass;
}

describe('cuid()', function () {
  it('should return a string', function () {
    expect(typeof cuid()).toBe('string');
  });
});

describe('cuid collisions', function () {
  it('should not collide', function () {
    if (isInBrowser) {
      pending('Skipping collision test in browser');
    }

    expect(collisionTest(cuid)).toBe(true);
  });
});

describe('isCuid()', function () {
  it('should return true for generated cuids', function () {
    expect(cuid.isCuid(cuid())).toBe(true);
  });

  it('should return false for strings that are too short', function () {
    expect(cuid.isCuid('cuidistooshort')).toBe(false);
  });

  it('should return false for strings that are too long', function () {
    expect(cuid.isCuid('cuidismorethan32characterssoisnotvalid')).toBe(false);
  });

  it('should return false for strings that do not match the format', function () {
    expect(cuid.isCuid('doesnotbeginwithacsoisinvalid')).toBe(false);
    expect(cuid.isCuid('contains-invalid-characters')).toBe(false);
  });
});
