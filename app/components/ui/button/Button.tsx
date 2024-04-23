import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './button.module.scss'
import Link from 'next/link';
import useWindowDimensions from '@/hooks/useWindowDimensions';

interface IButton {
	fontSize: number
	backgroundRgb: boolean
	text?: string
	children?: ReactNode
	href?: string
}

const Button: FC<IButton> = ({fontSize, backgroundRgb, text, href, children}) => {
	const { width } = useWindowDimensions();

	

	return (
		<>
			<button className={styles.button} style={{
				fontSize: fontSize,
				background: backgroundRgb ? 'linear-gradient(270deg, rgba(38,116,251,1) 0%, rgba(106,17,203,1) 100%)' : '',

				}}>
				{href ? (
					<Link href={`/${href}`}><span>{text ? text : children}</span></Link>
				) : (
					<span>{text ? text : children}</span>
				)}
			
			</button>
		</>
	)
}

export default Button