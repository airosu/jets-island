import { render } from '@testing-library/react'
import { getCleanHash } from './getCleanHash'

const windowLocationDefault: Partial<typeof window.location> = {
    href: 'http://localhost/',
    origin: 'http://localhost',
    protocol: 'http:',
    host: 'localhost',
    hostname: 'localhost',
    pathname: '/',
    port: '',
    hash: '',
    search: '',
    toString: jest.fn(),
    assign: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
}

const windowLocationMock: Partial<typeof window.location> = {
    ...windowLocationDefault,
    href: 'https://placehold.jp/150x150.png#test',
    origin: 'https://placehold.jp',
    protocol: 'https:',
    host: 'placehold.jp',
    hostname: 'placehold.jp',
    hash: '#test',
}

const MockComponent = () => {
    return <div id="root" />
}

describe('getCleanHash()', () => {
    afterEach(() => {
        Object.defineProperty(window, 'location', {
            value: {
                ...windowLocationDefault,
            },
            writable: true,
        })
    })
    it('should return the cleaned hash substring from the url', () => {
        Object.defineProperty(window, 'location', {
            value: {
                ...windowLocationMock,
                hash: '#test',
            },
            writable: true,
        })

        render(<MockComponent />)

        const cleanHash = getCleanHash()
        expect(cleanHash).toBe('test')
    })

    it('should return empty string if no hash is present in url', () => {
        Object.defineProperty(window, 'location', {
            value: {
                ...windowLocationMock,
                hash: '',
            },
            writable: true,
        })

        render(<MockComponent />)

        const cleanHash = getCleanHash()
        expect(cleanHash).toBe('')
    })

    it('should return empty string if only the hash symbol is present in the url', () => {
        Object.defineProperty(window, 'location', {
            value: {
                ...windowLocationMock,
                hash: '#',
            },
            writable: true,
        })

        render(<MockComponent />)

        const cleanHash = getCleanHash()
        expect(cleanHash).toBe('')
    })

    it('should return undefined if location object is missing "hash" key', () => {
        Object.defineProperty(window, 'location', {
            value: {},
            writable: true,
        })

        render(<MockComponent />)

        const cleanHash = getCleanHash()
        expect(cleanHash).toBeUndefined()
    })

    it('should return undefined if "hash" key is undefined', () => {
        Object.defineProperty(window, 'location', {
            value: {
                hash: undefined,
            },
            writable: true,
        })

        render(<MockComponent />)

        const cleanHash = getCleanHash()
        expect(cleanHash).toBeUndefined()
    })

    it('should return undefined if location is undefined', () => {
        Object.defineProperty(window, 'location', {
            value: undefined,
            writable: true,
        })

        render(<MockComponent />)

        const cleanHash = getCleanHash()
        expect(cleanHash).toBeUndefined()
    })
})
