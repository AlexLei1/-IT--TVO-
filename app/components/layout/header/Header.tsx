import { FC } from 'react'
import styles from './header.module.scss'
import Logo from '@/components/ui/logo/Logo'
import Search from '@/components/ui/search/Search'
import Button from '@/components/ui/button/Button'
import { SvgBell } from '@/components/ui/svg'
import Link from 'next/link'
import {useScrollDirection} from '@/hooks/useScrollDirection'
import NavLink from '@/components/ui/nav-link/NavLink'

const Header: FC = () => {
	const scrollDir = useScrollDirection()

	return (
	 	<div className={`
		${styles.header} 
		${scrollDir === 'up' ? styles.up : ''} 
		${scrollDir === 'down' ? styles.down : ''}`}>
			<Logo/>
			<div>
				<Search/>
				<Button 		
					fontSize={16} 
					backgroundRgb={true} 
					text={'7 дней за 0р'}
					href={'title'}>
							<SvgBell/>
				</Button>
				<Button 		
					fontSize={16} 
					backgroundRgb={false}
					text={'Промокод'}
					href={'title'}>
							<SvgBell/>
				</Button>
				<NavLink href='' text='Войти'/>
			</div>
		</div>
	)
}

export default Header