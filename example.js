'use strict'

const markov = require('./')

const divide = (input = [], n = 2) => input
  .reduce((a, b, i) => (
    !(i % n) ? [...a, input.slice(i, i + n).join(' ')] : a
  ), [])

const source = 'mama said knock you out! my my my!'
const filter = markov(divide(source.split(' ')))

const sample = (memo = [], n = 10) => {
  const next = filter()
  const mark = memo.push(next)

  if (mark >= n) {
    return memo
  }

  return sample(memo)
}

console.log(sample().join(' '))
