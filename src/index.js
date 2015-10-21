/**
 * Handle `extend` property.
 *
 * @param {Rule} rule
 * @api public
 */
export default function jssExtend() {
  return rule => {
    if (!rule.style || !rule.style.extend) return

    function extend(newStyle, style) {
      if (Array.isArray(style.extend)) {
        for (let i = 0; i < style.extend.length; i++) {
          extend(newStyle, style.extend[i])
        }
      }
      else {
        for (let prop in style.extend) {
          if (prop === 'extend') extend(newStyle, style.extend.extend)
          else newStyle[prop] = style.extend[prop]
        }
      }

      // Copy base style.
      for (let prop in style) {
        if (prop !== 'extend') newStyle[prop] = style[prop]
      }

      return newStyle
    }

    rule.style = extend({}, rule.style)
  }
}
