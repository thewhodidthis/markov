'use strict'

const { equal, ok } = require('tapeless')
const markov = require('./')

const filter = markov('I am what I am, you are what you are, they is what they is')

equal(typeof filter, 'function', 'thunk on init', 'will return')

ok(filter(), 'will compute')
