'use strict';

// Random from helper
const random = (input = []) => input[Math.floor(Math.random() * input.length)];

const markov = (input = []) => {
  // Get array representation of input if need be
  const body = Array.isArray(input) ? input : String(input).split('');

  // Dedupe input for lookup keys
  const keys = [...new Set(body)];

  // Cutoff
  const stop = keys.length - 1;

  // Collect suffixes for each key
  const data = new Map(
    keys.map((k, i) => {
      const v = i >= stop ? keys : body.map((x, j) => (x === k ? body[j + 1] : 0)).filter(x => !!x);

      return [k, v]
    })
  );

  // Choose a random key to start with, replaced on each iteration
  let output = random(keys);

  return (seed = output) => {
    output = random(
      data.get(seed)
    );

    return output
  }
};

module.exports = markov;
