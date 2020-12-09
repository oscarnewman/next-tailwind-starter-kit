import classNames from 'classnames'

/**
 * Concatenates classes into a single string
 *
 * @param {any[]} classes Objects or strings defining classes to apply
 */
export function cx(...classes: any[]) {
	return classNames(classes)
}
