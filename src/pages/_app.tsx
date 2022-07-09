import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp

// TODO: Add linter rules for: import merging, import ordering, automatically import as type
