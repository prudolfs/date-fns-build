'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;

var _index = require('../_lib/getTimezoneOffsetInMilliseconds/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../toDate/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../format/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../differenceInCalendarDays/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('../locale/en-US/index.js');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('../subMilliseconds/index.js');

var _index12 = _interopRequireDefault(_index11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to format
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the date in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property
 */
function formatRelative(dirtyDate, dirtyBaseDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(dirtyDate);
  var baseDate = (0, _index4.default)(dirtyBaseDate);

  var options = dirtyOptions || {};
  var locale = options.locale || _index10.default;

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  if (!locale.formatRelative) {
    throw new RangeError('locale must contain formatRelative property');
  }

  var diff = (0, _index8.default)(date, baseDate);

  if (isNaN(diff)) {
    throw new RangeError('Invalid time value');
  }

  var token;
  if (diff < -6) {
    token = 'other';
  } else if (diff < -1) {
    token = 'lastWeek';
  } else if (diff < 0) {
    token = 'yesterday';
  } else if (diff < 1) {
    token = 'today';
  } else if (diff < 2) {
    token = 'tomorrow';
  } else if (diff < 7) {
    token = 'nextWeek';
  } else {
    token = 'other';
  }

  var utcDate = (0, _index12.default)(date, (0, _index2.default)(date));
  var utcBaseDate = (0, _index12.default)(baseDate, (0, _index2.default)(baseDate));
  var formatStr = locale.formatRelative(token, utcDate, utcBaseDate, options);
  return (0, _index6.default)(date, formatStr, options);
}
module.exports = exports['default'];