## about

A bare bones Markov calculator that operates on arrays or strings.

## setup

Load via HTML script tag:

```html
<!-- Just an IIFE namespaced `markov` -->
<script src="https://thewhodidthis.github.io/markov/markov.js"></script>
```

Source from an import map:

```json
{
  "imports": {
    "@thewhodidthis/markov": "https://thewhodidthis.github.io/markov/main.js"
  }
}
```

Download from GitHub directly if using a package manager:

```sh
# Add to package.json
npm install thewhodidthis/markov
```

## usage

Be iterating:

```js
const markov = require("@thewhodidthis/markov")

const filter = ((source) => {
  const step = markov(source)

  const tick = function*() {
    while (1) {
      yield step()
    }
  }

  return tick()
})("mama mia, mama mia, mama mia".split(" "))

filter.next()
```

Be async:

```js
import markov from "@thewhodidthis/markov"

const bender = async (data = "") => {
  const step = markov(data)
  const next = await step()

  return next
}

bender("mama mia, mama mia, mama mia".split(" ")).then(console.log)
```
