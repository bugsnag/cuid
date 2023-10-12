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
