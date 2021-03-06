'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCWeek;

var _index = require('../toInteger/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../toDate/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../getUTCWeek/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCWeek(dirtyDate, dirtyWeek, options) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate);
  var week = (0, _index2.default)(dirtyWeek);
  var diff = (0, _index6.default)(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
module.exports = exports['default'];