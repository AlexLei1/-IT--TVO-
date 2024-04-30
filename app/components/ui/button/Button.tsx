import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './button.module.scss'
import Link from 'next/link';


interface IButton {
	backgroundRgb: boolean
	children?: ReactNode
	href?: string
}

const Button: FC<IButton> = ({backgroundRgb, href, children}) => {


	return (
		<>
			<button className={styles.button} style={{
				background: backgroundRgb ? 'linear-gradient(270deg, rgba(38,116,251,1) 0%, rgba(106,17,203,1) 100%)' : '',
				}}>
				{href ? (
					<Link href={`/${href}`}><span>{children}</span></Link>
				) : (
					<span>{children}</span>
				)}
			</button>
		</>
	)
}

export default Button