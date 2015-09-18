const toString = Object.prototype.toString

/**
 * Handle `extend` property.
 *
 * @param {Rule} rule
 * @api public
 */
export default function jssExtend(rule) {
  const currStyle = rule.style

  if (!currStyle || !currStyle.extend) return

  const newStyle = {}

  ; (function extend(style) {
    if (toString.call(style.extend) === '[object Array]') {
      for (let i = 0; i < style.extend.length; i++) {
        extend(style.extend[i])
      }
    }

    else {
      for (let prop in style.extend) {
        if (prop === 'extend') extend(style.extend.extend)
        else newStyle[prop] = style.extend[prop]
      }
    }

    // Copy base style.
    for (let prop in style) {
      if (prop !== 'extend') newStyle[prop] = style[prop]
    }
  }(currStyle))

  rule.style = newStyle
}
