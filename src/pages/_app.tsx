import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { theme } from 'styles/theme'
import { createEmotionCache } from 'lib/createEmotionCache'
import { wrapper } from 'store/store'
import { addClient } from 'store/actions/clients.actions'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
    const response = await fetch(`https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`)
    const { data } = await response.json()
    store.dispatch(addClient(`${data.first_name} ${data.last_name}`))

    // => async ({ Component, ctx }: AppContext) => {...}
    const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}

    return {
        pageProps: {
            ...pageProps,
            // ...(await App.getInitialProps(context)).pageProps,
            pathname: ctx.pathname,
        },
    }
})

export default wrapper.withRedux(MyApp)
