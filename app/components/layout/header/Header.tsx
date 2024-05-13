import { FC, useState } from 'react'
import styles from './Header.module.scss'
import Logo from '@/components/ui/logo/Logo'
import Search from '@/components/ui/search/Search'
import Button from '@/components/ui/button/Button'
import {useScrollDirection} from '@/hooks/useScrollDirection'
import NavLink from '@/components/ui/nav-link/NavLink'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { SvgBell, SvgProfile } from '@/components/ui/svg'

const Header: FC = () => {
	const scrollDir = useScrollDirection()
	const { width } = useWindowDimensions();
	const [] = useState()
	

	return (
	 	<div className={`
			${styles.wrapper}\
			${scrollDir === 'up' ? styles.up : ''} 
			${scrollDir === 'down' ? styles.down : ''}`}>
			<Logo/>
			{width >= 960 ? (
					<div>
						<Search/>
						<div className={styles.btnWrapper}>
							<Button
								backgroundRgb={true}
								href={'/'}>
									7 дней за 0р
							</Button>
							<Button
								backgroundRgb={false}
								href={'/'}>
									Промокод
							</Button>
						</div>
						<NavLink href='' text='Войти'/>
					</div>
				) : (
					<div>
						<Search/>
						<div className={styles.btnWrapper}>
							<Button
								backgroundRgb={false}
								href={'/'}
								svg='icon-bell'/>
							<Button
								backgroundRgb={false}
								href={'/'}
								svg='icon-profile'/>
						</div>

					</div>
				)}
		</div>
	)
}

export default Header