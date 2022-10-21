import type { Config } from 'jest'

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    coverageProvider: 'v8',
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!<rootDir>/out/**',
        '!<rootDir>/.next/**',
        '!<rootDir>/*.config.{ts,js}',
        '!<rootDir>/coverage/**',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default config
