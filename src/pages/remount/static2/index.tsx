import type { InferGetStaticPropsType, NextPage } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { addClient } from 'store/actions/clients.actions'
import { incrementCounter } from 'store/actions/counter.actions'
import { useAppDispatch } from 'store/hooks/useAppDispatch'
import { selectClientNames } from 'store/selectors/clients.selectors'
import { selectCounterValue } from 'store/selectors/counter.selectors'
import { wrapper } from 'store/store'

export const Static2: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ pageId }) => {
    const [isSSR, setIsSSR] = useState(true)
    const [name, setName] = useState('')

    const dispatch = useAppDispatch()
    const counter = useSelector(selectCounterValue)
    const clients = useSelector(selectClientNames)

    // Fix 2 for Warning: Text content did not match. Server: "1" Client: "2"
    useEffect(() => {
        setIsSSR(false)
    }, [])

    return (
        <div>
            <h1>Static - {pageId}</h1>
            <h3>Client side remount {`(${process.env.NODE_ENV})`}</h3>

            {!isSSR && <h4>Counter: {counter}</h4>}
            <button onClick={() => dispatch(incrementCounter(1))}>+1</button>

            <h2>Clients: </h2>
            {clients.map((client, index) => (
                <p key={client}>
                    {index + 1}
                    {'. '}
                    {client}
                </p>
            ))}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => dispatch(addClient(name))}>Add user</button>

            <div>
                <Link href={'/remount/static1'}>Static 1</Link>
                <Link href={'/remount/static3'}>Static 3</Link>
            </div>
        </div>
    )
}

// export const getStaticProps = async (_context: GetStaticPropsContext) => {
//     return {
//         props: {
//             pageId: 1,
//         },
//     }
// }

export const getStaticProps = wrapper.getStaticProps((store) => (_context) => {
    // const counter = store.getState().counter
    // const clients = store.getState().clients
    // const locale = context.locale

    // This dispatch will run twice because of "reactStrictMode: true" in next.config.js
    store.dispatch(incrementCounter(1))

    return {
        props: {
            pageId: 2,
        },
    }
})

export default Static2
