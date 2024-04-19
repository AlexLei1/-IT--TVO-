import { FC } from 'react'
import styles from './logo.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { SvgLogo, SvgText } from '../svg'




const Logo: FC = () => {
	return (
	<div className={styles.logoWrapper}>
		<Link href='/' className={styles.link}>
			<div style={{display: 'flex', alignItems: 'center'}}>
				<SvgLogo style={{width: 32, height: 50, marginRight: 16}}/>
				<SvgText style={{width: 95, height: 22 }}/>
			</div>
		</Link>
	</div>
	)
}

export default Logo