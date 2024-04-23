import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './button.module.scss'
import Link from 'next/link';


interface IButton {
	fontSize?: number
	backgroundRgb: boolean
	isRounding?: boolean | undefined
	children?: ReactNode
	href?: string
	paddingLeft?: string
	paddingRight?: string
	minWidth?: string
}

const Button: FC<IButton> = ({fontSize, backgroundRgb, isRounding, paddingLeft, paddingRight, minWidth, href, children}) => {


	return (
		<>
			<button className={styles.button} style={{
				borderRadius: isRounding ? '100px': '12px',
				fontSize: fontSize,
				paddingLeft: paddingLeft,
				paddingRight: paddingRight,
				minWidth: minWidth,
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