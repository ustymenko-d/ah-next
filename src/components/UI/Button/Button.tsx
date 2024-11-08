import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

interface IButtonProps {
	linkHref?: string
	children: string
}

const Button: React.FC<IButtonProps> = ({ linkHref, children }) => {
	const BASIC_CLASSES: string =
		'relative inline-block overflow-hidden py-3 pl-8 pr-14 bg-neutral-950 text-neutral-50 font-medium text-base tracking-wide text-center'

	return linkHref ? (
		<Link
			href={linkHref}
			className={`${BASIC_CLASSES} ${styles.button}`}>
			{children}
		</Link>
	) : (
		<button className={`${BASIC_CLASSES} ${styles.button}`}>{children}</button>
	)
}

export default Button
