import { useRouteProgressBar } from '@/hooks/useRouteProgressBar'
import '@/styles/nprogress.css'
import '@/styles/tailwind.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
	useRouteProgressBar()

	return <Component {...pageProps} />
}

export default MyApp
