import { FC } from 'react'
import styles from './NavButton.module.scss'

interface INavButton {
	text: string
	active: number
	setActive: any
	index: number
}

const NavButton: FC<INavButton> = ({text, active, setActive, index}) => {
	return (
		<button onClick={() => setActive(index)} className={`${styles.button} ${active === index ? styles.active : ''}`}>
			<span>{text}</span>
		</button>
	)
}

export default NavButton

