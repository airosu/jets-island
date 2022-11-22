/**
 * @jest-environment node
 */

import { coinToss } from './coinToss'

describe('coinToss()', () => {
    it('should either return "true" or "false"', () => {
        const initialCoinToss = coinToss()
        expect([true, false]).toContain(initialCoinToss)

        let coinTossResult = initialCoinToss
        let totalTosses = 0

        if (initialCoinToss === true) {
            while (coinTossResult === true) {
                coinTossResult = coinToss()
                totalTosses = totalTosses + 1
                if (totalTosses > 1000) {
                    throw new Error('Infinite loop detected!')
                }
            }
        } else {
            while (coinTossResult === false) {
                coinTossResult = coinToss()
                totalTosses = totalTosses + 1
                if (totalTosses > 1000) {
                    throw new Error('Infinite loop detected!')
                }
            }
        }

        expect(coinTossResult).toBe(!initialCoinToss)
    })
})
