import { FC } from 'react'
import styles from './navLink.module.scss'
import Link from 'next/link'

interface INavLink {
	text: string
	href: string
}

const NavLink: FC<INavLink> = ({text, href}) => {
	return (
		<Link className={styles.navLink} href={`/${href}`}>{text}</Link>
	)
}

export default NavLink