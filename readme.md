## Inheritance plugin for JSS

For those who uses an ES6 transpiler - you can achieve the same by using the language itself.

```javascript
var redButton = {
    background: 'red'
}

export default {
    button: {
        ...redButton,
        'font-size': '20px'
    }
}
```


This plugin implements `extend` property for [jss](https://github.com/jsstyles/jss).

Take a look at [examples](http://jsstyles.github.io/jss-extend/examples/index.html) directory.


```javascript
var redButton = {
    background: 'red'
}

exports.styles = {
    button: {
        extend: redButton, // can be an array of styles
        'font-size': '20px'
    }
}
```
```css
.button {
    background: red;
    font-size: 20px;
}
```

## Register plugin

```javascript
var jss = require('jss')
var extend = require('jss-extend')
jss.use(extend)
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
