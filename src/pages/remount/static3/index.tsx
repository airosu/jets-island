import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { incrementCounter } from 'store/actions/counter.actions'
import { useAppDispatch } from 'store/hooks/useAppDispatch'
import { selectCounterValue } from 'store/selectors/counter.selectors'

type FetchedComment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

// TODO: cleanup this file / split into three different remount solutions
export const Static3: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ pageId }) => {
    const [fetchedComments, setFetchedComments] = useState<FetchedComment[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useAppDispatch()
    const counter = useSelector(selectCounterValue)

    // useRef has a "current" property that persists throughout the lifetime of the component, even on mount / unmount
    // We will use this value to condition fetch to occur on the first mount only, no matter how many times it is remounted
    const effectRan = useRef(false)

    useEffect(() => {
        console.log({ msg: 'mount' })

        if (effectRan.current === false) {
            // semicolon linter rule conflict with prettier
            // eslint-disable-next-line no-extra-semi
            ;(async () => {
                setIsLoading(true)
                setErrorMessage('')
                try {
                    // This fetch will run twice because of "reactStrictMode: true" in next.config.js
                    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
                    const data: FetchedComment[] = await response.json()
                    console.log({ msg: 'Data fetched >>>', data })
                    setFetchedComments(data)
                } catch (err) {
                    const error = err as { message: string; stack: string }
                    setErrorMessage(error.message)
                } finally {
                    setIsLoading(false)
                }
            })()
            return () => {
                console.log({ msg: 'unmount' })
                effectRan.current = true
            }
        }
        return () => {}
    }, [])

    return (
        <div>
            <h1>Static - {pageId}</h1>
            <h3>Client side remount {`(${process.env.NODE_ENV})`}</h3>

            <h4>Counter: {counter}</h4>
            <button onClick={() => dispatch(incrementCounter(1))}>+1</button>
            {errorMessage && <span>ERROR: {errorMessage}</span>}

            <div>
                <Link href={'/remount/static1'}>Static 1</Link>
                <Link href={'/remount/static2'}>Static 2</Link>
            </div>
        </div>
    )
}

export const getStaticProps = async (_context: GetStaticPropsContext) => {
    return {
        props: {
            pageId: 3,
        },
    }
}

export default Static3
