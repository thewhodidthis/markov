var markov = (function() {
  "use strict"

  // Helps pick random array entries.
  const random = (input = []) => input[Math.floor(Math.random() * input.length)]

  // Helps produce markov chains.
  function markov(input = []) {
    // Obtain array representation of input if need be.
    const body = Array.isArray(input) ? input : String(input).split("")

    // Dedupe input for lookup keys.
    const keys = [...new Set(body)]

    // Gather potential values for each key.
    const data = new Map(
      keys.map((k, i, a) => {
        const v = i >= a.length - 1 ? a : body.map((x, j) => (x === k ? body[j + 1] : 0)).filter(x => !!x)

        return [k, v]
      }),
    )

    // Gets replaced on call.
    let result = random(keys)

    return (at = result) => {
      result = random(data.get(at))

      return result
    }
  }

  return markov
})()
