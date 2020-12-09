import { CSSProperties } from 'react'

export interface StyleProps {
	/** Class names to append to the DOM element */
	className?: string

	/** Javascript CSS Properties */
	style?: CSSProperties
}
