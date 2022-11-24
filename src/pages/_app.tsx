import type { AppProps } from 'next/app'
import MasterLayout from '../layouts/Master.layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MasterLayout >
            <Component {...pageProps} />
        </MasterLayout>
    )
}
