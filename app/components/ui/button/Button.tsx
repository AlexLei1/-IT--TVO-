import { FC, ReactNode } from 'react'
import styles from './button.module.scss'
import Link from 'next/link';

interface IButton {
	fontSize: number
	backgroundRgb: boolean
	paddingY?: number
	paddingX?: number
	marginX?: number
	title?: string
	children?: ReactNode
	href?: string
}

const Button: FC<IButton> = ({fontSize, backgroundRgb, paddingY, paddingX, marginX, title, href, children}) => {

	return (
		<>
			<button className={styles.button} style={{
				fontSize: fontSize,
				background: backgroundRgb ? 'linear-gradient(270deg, rgba(38,116,251,1) 0%, rgba(106,17,203,1) 100%)' : '',
				paddingLeft: paddingX,
				paddingRight: paddingX,
				paddingBottom: paddingY,
				paddingTop: paddingY,
				marginLeft: marginX,
				marginRight: marginX,
				}}>
				{href ? (
					<Link href={`/${href}`}><span>{title ? title : children}</span></Link>
				) : (
					<span>{title ? title : children}</span>
				)}
			
			</button>
		</>
	)
}

export default Button