import { useRouter } from 'next/router'
import nProgress from 'nprogress'
import { useEffect } from 'react'

/**
 * Hook to add a progress bar to page changes and loads. Should probably just be called from _app.
 */
export function useRouteProgressBar() {
	const router = useRouter()

	useEffect(() => {
		nProgress.configure({
			showSpinner: false,
		})

		router.events.on('routeChangeStart', nProgress.start)
		router.events.on('routeChangeComplete', nProgress.done)
		router.events.on('routeChangeError', () => nProgress.done(true))

		return nProgress.remove
	}, [router.events])
}
