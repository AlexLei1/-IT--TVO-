import { FC, useState } from 'react'
import styles from './NavList.module.scss'
import NavButton from '../nav-button/NavButton'


const NavList: FC = () => {
	const [active, setActive] = useState<number>(0)

	return (
		<div className={styles.container}>
			<NavButton index={1} setActive={setActive} active={active} text='трилер'/>
			<NavButton index={2} setActive={setActive} active={active} text='1 сезон'/>
			<NavButton index={3} setActive={setActive} active={active} text='2 сезон'/>
			<NavButton index={4} setActive={setActive} active={active} text='3 сезон'/>
			<NavButton index={5} setActive={setActive} active={active} text='4 сезон'/>
		</div>
	)
}

export default NavList