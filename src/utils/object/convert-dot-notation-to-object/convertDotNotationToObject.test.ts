/**
 * @jest-environment node
 */

import { convertDotNotationToObject } from './convertDotNotationToObject'

const mockDictionaryMapObject = {
    'navigation.cardinalDirections.up': 'Up',
    'navigation.cardinalDirections.down': 'Down',
    'navigation.historical.back': 'Back',
    'messages.warnings.somethingWentWrong': 'Something went wrong',
}

const mockDictionary = {
    navigation: {
        cardinalDirections: {
            up: 'Up',
            down: 'Down',
        },
        historical: {
            back: 'Back',
        },
    },
    messages: {
        warnings: {
            somethingWentWrong: 'Something went wrong',
        },
    },
}

type MockDictionary = {
    navigation: {
        cardinalDirections: {
            up: string
            down: string
        }
        historical: {
            back: string
        }
    }
    messages: {
        warnings: {
            somethingWentWrong: string
        }
    }
}

describe('convertDotNotationToObject()', () => {
    it('should convert dot notation to object', () => {
        const newDictionary = convertDotNotationToObject<MockDictionary>(mockDictionaryMapObject)
        expect(newDictionary).toStrictEqual(mockDictionary)
    })

    it('should not affect normal objects', () => {
        expect(convertDotNotationToObject({ id: 1 })).toStrictEqual({ id: 1 })
        expect(convertDotNotationToObject(mockDictionary)).toStrictEqual(mockDictionary)
        expect(convertDotNotationToObject({})).toStrictEqual({})
    })
})
