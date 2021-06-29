import { assert, report } from "tapeless"
import markov from "./main.js"

const { equal, ok } = assert

const source = "I am what I am, you are what you are, they is what they is"
const filter = markov(source.split(" "))

equal
  .describe("thunk on init", "will return")
  .test(typeof filter, "function")

const t1 = filter()

ok.test(t1)

equal
  .describe(null, "will compute")
  .test(typeof t1, "string")

const t2 = filter("I")

ok
  .test(t2)
  .test(t2.includes("am"))

equal
  .describe(null, "will seed")
  .test(filter("How?"), undefined)

report()
