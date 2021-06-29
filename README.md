## about

A bare bones Markov calculator.

## setup

Fetch latest from GitHub:

```sh
npm install thewhodidthis/markov
```

## usage

Be iterating:

```js
const markov = require('@thewhodidthis/markov')

const filter = ((source) => {
  const step = markov(source)

  const tick = function *() {
    while (1) {
      yield step()
    }
  }

  return tick()
})('mama mia, mama mia, mama mia'.split(' '))

filter.next()
```

Be async:

```js
import markov from '@thewhodidthis/markov'

const bender = async (data = '') => {
  const step = markov(data)
  const next = await step()

  return next
}

bender('mama mia, mama mia, mama mia'.split(' ')).then(console.log)
```
