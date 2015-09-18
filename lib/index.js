'use strict';

exports.__esModule = true;
exports['default'] = jssExtend;
var toString = Object.prototype.toString;

/**
 * Handle `extend` property.
 *
 * @param {Rule} rule
 * @api public
 */

function jssExtend(rule) {
  var currStyle = rule.style;

  if (!currStyle || !currStyle.extend) return;

  var newStyle = {};(function extend(style) {
    if (toString.call(style.extend) === '[object Array]') {
      for (var i = 0; i < style.extend.length; i++) {
        extend(style.extend[i]);
      }
    } else {
      for (var prop in style.extend) {
        if (prop === 'extend') extend(style.extend.extend);else newStyle[prop] = style.extend[prop];
      }
    }

    // Copy base style.
    for (var prop in style) {
      if (prop !== 'extend') newStyle[prop] = style[prop];
    }
  })(currStyle);

  rule.style = newStyle;
}

module.exports = exports['default'];