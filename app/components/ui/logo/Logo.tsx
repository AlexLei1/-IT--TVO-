import { FC } from 'react'
import styles from './logo.module.scss'
import Link from 'next/link'

const Logo: FC = () => {
	return (

	<Link href='/' className={styles.link}>
		<div className={styles.svgLogoWrapper}>
			<span className='icon-logo'></span>
		</div>
		<div className={styles.svgTextWrapper}>
			<span className='icon-text'></span>
		</div>
	</Link>

	)
}

export default Logo