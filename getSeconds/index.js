'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSeconds;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}
module.exports = exports['default'];