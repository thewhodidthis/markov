// Helps pick random array entries.
const random = (input = []) => input[Math.floor(Math.random() * input.length)]

// Helps produce markov chains.
export default function markov(input = []) {
  // Obtain array representation of input if need be.
  const body = Array.isArray(input) ? input : String(input).split("")

  // Dedupe input for lookup keys.
  const keys = [...new Set(body)]

  // Cutoff (second to last key), save for later.
  const stop = keys.length - 1

  // Gather potential values for each key.
  const data = new Map(
    keys.map((k, i) => {
      const v = i >= stop ? keys : body.map((x, j) => (x === k ? body[j + 1] : 0)).filter(x => !!x)

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
