![JSS logo](http://avatars1.githubusercontent.com/u/9503099?v=3&s=60)

## JSS plugin that enables inheritance

This plugin implements a custom `extend` style property.

[Demo](http://jsstyles.github.io/jss-examples/index.html#plugin-jss-extend) -
[JSS](https://github.com/jsstyles/jss)

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/jsstyles/jss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


## Usage example

```javascript
import jss from 'jss'
import extend from 'jss-extend'

jss.use(extend)

const redContainer = {
  background: 'red'
}

const styleSheet = jss.createStyleSheet({
  container: {
    extend: redContainer, // Can be an array of styles
    'font-size': '20px'
  }
})

/**
 * For those who use an ES6 transpiler - you can achieve the same
 * by using the language itself.
 */

// ES7
const styleSheet = jss.createStyleSheet({
  container: {
    ...redContainer,
    'font-size': '20px'
  }
})

// ES6
const styleSheet = jss.createStyleSheet({
  container: Object.assign({}, redContainer, {
    'font-size': '20px'
  }
})

// Or with a helper
import xtend from 'xtend' // Does not mutate arguments

const styleSheet = jss.createStyleSheet({
  container: xtend(redContainer, {
    'font-size': '20px'
  })
})
```

```javascript
console.log(styleSheet.toString())
```
```css
.jss-0-0 {
  background: red;
  font-size: 20px;
}
```

```javascript
console.log(styleSheet.classes)
```
```javascript
{ container: "jss-0-0" }
```


## Run tests

### Locally

```bash
npm i
open test/local.html
```

### From github

[Tests](https://jsstyles.github.com/jss-extend/test)


## License

MIT
