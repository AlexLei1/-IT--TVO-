import { FC } from 'react'
import styles from './header.module.scss'
import Logo from '@/components/ui/logo/Logo'
import Search from '@/components/ui/search/Search'
import Button from '@/components/ui/button/Button'
import { SvgBell } from '@/components/ui/svg'
import Link from 'next/link'
import {useScrollDirection} from '@/hooks/useScrollDirection'

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
					fontSize={18} 
					backgroundRgb={true} 
					paddingY={12}
					paddingX={16}
					marginX={8}
					title={'7 дней за 0р'}
					href={'title'}>
							<SvgBell/>
				</Button>
				<Button 		
					fontSize={18} 
					backgroundRgb={false} 
					paddingY={12}
					paddingX={16}
					marginX={8}
					title={'Промокод'}
					href={'title'}>
							<SvgBell/>
				</Button>
				<Link href={'/'}>
					<span style={{fontSize: 24, marginLeft: 8}}>Войти</span>
				</Link>
			</div>
		</div>
	)
}

export default Header