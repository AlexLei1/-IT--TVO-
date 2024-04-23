import { FC } from 'react'
import styles from './logo.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { SvgLogo, SvgText } from '../svg'




const Logo: FC = () => {
	return (

	<Link href='/' className={styles.link}>
		<div style={{display: 'flex', alignItems: 'center'}}>
			<SvgLogo style={{width: 32, height: 50}}/>
			<SvgText style={{width: 88, height: 22}}/>
		</div>
	</Link>

	)
}

export default Logo