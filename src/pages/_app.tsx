import { useRouteProgressBar } from '@/hooks/useRouteProgressBar'
import '@/styles/nprogress.css'
import '@/styles/tailwind.css'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

const queryCache = new QueryCache()

function MyApp({ Component, pageProps }) {
	useRouteProgressBar()

	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			<Component {...pageProps} />
			<ReactQueryDevtools initialIsOpen />
		</ReactQueryCacheProvider>
	)
}

export default MyApp
