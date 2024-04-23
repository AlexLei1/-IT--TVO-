import { FC, useState } from 'react'
import styles from './header.module.scss'
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
			${styles.header}\
			${scrollDir === 'up' ? styles.up : ''} 
			${scrollDir === 'down' ? styles.down : ''}`}>
			<Logo/>
			{width >= 960 ? (
					<div>
						<Search/>
						<Button
							fontSize={16} 
							backgroundRgb={true}
							minWidth='0px'
							href={'/'}>
								7 дней за 0р
						</Button>
						<Button
							fontSize={16} 
							backgroundRgb={false}
							minWidth='0px'
							href={'/'}>
								Промокод
						</Button>
						<NavLink href='' text='Войти'/>
					</div>
				) : (
					<div>
						<Search/>
						<Button
							fontSize={16}
							isRounding={true}
							backgroundRgb={false}
							minWidth='0px'
							href={'/'}>
								<SvgBell/>
						</Button>
						<Button
							fontSize={16}
							isRounding={true}
							backgroundRgb={false}
							minWidth='0px'
							href={'/'}>
								<SvgProfile/>
						</Button>
					</div>
				)}
		</div>
	)
}

export default Header