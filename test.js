'use strict'

const { equal, ok } = require('tapeless')
const markov = require('./')

const source = 'I am what I am, you are what you are, they is what they is'
const filter = markov(source.split(' '))

equal(typeof filter, 'function', 'thunk on init', 'will return')

const t1 = filter()

ok(t1, null, 'will compute')
equal(typeof t1, 'string')

const t2 = filter('I')

ok(t2, null, 'will seed as expected')
ok(t2.includes('am'))

equal(filter('How?'), undefined)
