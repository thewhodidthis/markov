import markov from "./main.js"

// Consider word couples (order 2).
const divide = (input = [], n = 1) =>
  input
    .reduce((a, _, i) => (
      !(i % n) ? [...a, input.slice(i, i + n).join(" ")] : a
    ), [])

const source = "The cow ran past the field. The pig walked through the yard. The sheep ran into the marsh."
const filter = markov(divide(source.split(" ")))

const sample = (memo = [], n = 10) => {
  const next = filter()
  const mark = memo.push(next)

  if (mark >= n) {
    return memo
  }

  return sample(memo)
}

console.log(sample().join(" "))
