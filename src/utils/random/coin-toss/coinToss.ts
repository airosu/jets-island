/**
 * Randomly returns either "true" or "false", each with a 50% chance.
 *
 * @example
 * coinToss() // => true
 * coinToss() // => false
 */

export const coinToss = () => Math.random() < 0.5
