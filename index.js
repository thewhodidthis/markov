'use strict';

// # Markov chain calculator
const markov = (input = []) => {
  // Obtain array representation of input if need be
  const body = Array.isArray(input) ? input : String(input).split('');

  // Dedupe input for lookup keys
  const keys = [...new Set(body)];

  // Random from helper
  const rand = (from = keys) => from[Math.floor(Math.random() * from.length)];

  // Cutoff (second to last key), save for later
  const stop = keys.length - 1;

  // Gather potential values for each key
  const data = new Map(
    keys.map((k, i) => {
      const v = i >= stop ? keys : body.map((x, j) => (x === k ? body[j + 1] : 0)).filter(x => !!x);

      return [k, v]
    })
  );

  // Gets replaced on each iteration,
  // fed keys on first call since `undefined`
  let next;

  return () => {
    next = rand(data.get(next));

    return next
  }
};

module.exports = markov;
